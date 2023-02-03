const { ErrorGenerator, types } = require('../utils/errorSettings');
const {
  isFieldsAreValid,
  isAnExistingUser,
  } = require('./validations/userService.validation');
const { User } = require('../models');
const { createToken } = require('../utils/JWT');

const addUser = async (displayName, password, email, image) => {
  const isValid = isFieldsAreValid(displayName, password, email, image);
  console.log(isValid.error);
  if (isValid.error) throw new ErrorGenerator(types.BAD_REQUEST, isValid.error.message);
  const isExist = await isAnExistingUser(email);
  if (isExist) throw new ErrorGenerator(types.CONFLICT, 'User already registered');
  const newUser = { displayName, email, password };
  if (image) newUser.image = image;
  await User.create(newUser);
  const token = createToken({ email });
  return token;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  addUser,
  getUsers,
};