const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ data }, secretKey, jwtConfig);

const decodeToken = (token) => {
  try {
    const result = jwt.verify(token, secretKey);
    return result;
  } catch (error) {
    return { error };
  }
};

module.exports = {
  createToken,
  decodeToken,
};