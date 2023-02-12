const errorHandlerMiddleware = require('./errorHandler.middleware');
const validateLoginMiddleware = require('./validateLogin.middleware');
const validateAddUserMiddleware = require('./validateAddUser.middleware');
const validateTokenMiddleware = require('./validateToken.middleware');
const validateAddCategoryMiddleware = require('./validateAddCategory.middleware');
const validateAddPostMiddleware = require('./validateAddPost.middleware');
const validateUpdatePostMiddleware = require('./validateUpdatePost.middleware');

module.exports = {
  errorHandlerMiddleware,
  validateLoginMiddleware,
  validateAddUserMiddleware,
  validateTokenMiddleware,
  validateAddCategoryMiddleware,
  validateAddPostMiddleware,
  validateUpdatePostMiddleware,
};