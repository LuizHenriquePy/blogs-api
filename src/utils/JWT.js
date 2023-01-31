const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1m',
  algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ data }, secretKey, jwtConfig);

const decodeToken = (token) => jwt.verify(token, secretKey);

module.exports = {
  createToken,
  decodeToken,
};