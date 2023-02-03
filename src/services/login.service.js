const { User } = require('../models');

const { ErrorGenerator, types } = require('../utils/errorSettings');
const jwt = require('../utils/JWT');
const { isFieldsAreValid } = require('./validations/loginService.validation');

const login = async (email, password) => {
  const isValid = isFieldsAreValid(email, password);
  if (!isValid) {
    throw new ErrorGenerator(types.BAD_REQUEST, 'Some required fields are missing');
  }
  const user = await User.findOne({ where: { email } });
  if (!user) throw new ErrorGenerator(types.BAD_REQUEST, 'Invalid fields');

  const token = jwt.createToken({ email });

  return token;
};

module.exports = {
  login,
};