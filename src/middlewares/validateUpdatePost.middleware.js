const { ErrorGenerator, types } = require('../utils/errorSettings');

module.exports = (req, _res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    throw new ErrorGenerator(types.BAD_REQUEST, 'Some required fields are missing');
  }
  next();
};