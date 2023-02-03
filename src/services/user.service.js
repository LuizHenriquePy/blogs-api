const Sequelize = require('sequelize');
const { ErrorGenerator, types } = require('../utils/errorSettings');
const { isFieldsAreValid, isAnExistingUser } = require('./validations/userService.validation');
const config = require('../config/config');
const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const addUser = async (displayName, password, email, image) => {
  const isValid = isFieldsAreValid(displayName, password, email, image);
  console.log(isValid.error);
  if (isValid.error) throw new ErrorGenerator(types.BAD_REQUEST, isValid.error.message);
  const isExist = await isAnExistingUser(email);
  if (isExist) throw new ErrorGenerator(types.CONFLICT, 'User already registered');
  const newUser = { displayName, email, password };
  if (image) newUser.image = image;
  const user = await sequelize.transaction(async (t) => {
    const id = User.create(newUser, { transaction: t });
    const result = User.findOne({
      where: { id }, attributes: { exclude: ['password'] } }, { transaction: t });
    return result;
  });
  const token = createToken(user);
  return token;
};

module.exports = {
  addUser,
};