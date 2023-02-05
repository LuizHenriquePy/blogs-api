const { ErrorGenerator, types } = require('../utils/errorSettings');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ErrorGenerator(types.BAD_REQUEST, 'Some required fields are missing'); 
  }
  return next();
};