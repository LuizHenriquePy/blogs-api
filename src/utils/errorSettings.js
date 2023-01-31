class ErrorGenerator extends Error {
  constructor(type, message) {
    super(message);
    this.name = 'ErrorGenerator';
    this.type = type;
  }
} 

const types = {
  BAD_REQUEST: 400,
};

module.exports = {
  types,
  ErrorGenerator,
};