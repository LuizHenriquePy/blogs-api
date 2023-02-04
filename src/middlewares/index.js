const errorHandlerMiddleware = require('./errorHandler.middleware');
const validateLoginMiddleware = require('./validateLogin.middleware');
const validateAddUserMiddleware = require('./validateAddUser.middleware');
const validateTokenMiddleware = require('./validateToken.middleware');
const validateAddCategoryMiddleware = require('./validateAddCategory.middleware');

module.exports = {
  errorHandlerMiddleware,
  validateLoginMiddleware,
  validateAddUserMiddleware,
  validateTokenMiddleware,
  validateAddCategoryMiddleware,
};