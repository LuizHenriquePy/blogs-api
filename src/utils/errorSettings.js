class ErrorGenerator extends Error {
  constructor(type, message) {
    super(message);
    this.name = 'ErrorGenerator';
    this.type = type;
  }
} 

const types = {};

module.exports = {
  types,
  ErrorGenerator,
};