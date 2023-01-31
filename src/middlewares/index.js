const errorHandlerMiddleware = require('./errorHandler.middleware');
const validateLoginMiddleware = require('./validateLogin.middleware');

module.exports = {
  errorHandlerMiddleware,
  validateLoginMiddleware,
};