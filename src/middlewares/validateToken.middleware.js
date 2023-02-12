const jwt = require('../utils/JWT');
const { ErrorGenerator, types } = require('../utils/errorSettings');
const { User } = require('../models');

module.exports = async (req, _res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) throw new ErrorGenerator(types.UNAUTHENTICATED, 'Token not found');
    const result = jwt.decodeToken(token);
    if (result.error) throw new ErrorGenerator(types.UNAUTHENTICATED, 'Expired or invalid token');
    const user = await User.findOne({ where: { email: result.data.email } });
    if (!user) throw new ErrorGenerator(types.UNAUTHENTICATED, 'Invalid token');
    req.body.userId = user.dataValues.id;
    return next();
  } catch (error) {
    next(error);
  }
};