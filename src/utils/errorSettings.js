class ErrorGenerator extends Error {
  constructor(type, message) {
    super(message);
    this.name = 'ErrorGenerator';
    this.type = type;
  }
} 

const types = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  NOT_FOUND: 404,
  UNAUTHENTICATED: 401,
};

module.exports = {
  types,
  ErrorGenerator,
};