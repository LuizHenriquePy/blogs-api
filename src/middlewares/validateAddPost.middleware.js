const { ErrorGenerator, types } = require('../utils/errorSettings');

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw new ErrorGenerator(types.BAD_REQUEST, 'Some required fields are missing');
  }
  next();
};