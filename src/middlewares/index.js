const errorHandlerMiddleware = require('./errorHandler.middleware');
const validateLoginMiddleware = require('./validateLogin.middleware');
const validateAddUserMiddleware = require('./validateAddUser.middleware');
const validateTokenMiddleware = require('./validateToken.middleware');

module.exports = {
  errorHandlerMiddleware,
  validateLoginMiddleware,
  validateAddUserMiddleware,
  validateTokenMiddleware,
};