const { ErrorGenerator, types } = require('../utils/errorSettings');

module.exports = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  if (!displayName || !email || !password) {
    throw new ErrorGenerator(types.BAD_REQUEST, 'Invalid fields');
  }
  return next();
};