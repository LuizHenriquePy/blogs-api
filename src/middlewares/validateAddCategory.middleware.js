const { ErrorGenerator, types } = require('../utils/errorSettings');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  if (!name) throw new ErrorGenerator(types.BAD_REQUEST, '"name" is required');
  return next();
};