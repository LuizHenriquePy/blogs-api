const joi = require('joi');

const emailSchema = joi.string().email().required();

const passwordSchema = joi.string().min(1).required();

const isFieldsAreValid = (email, password) => {
  const validationEmail = emailSchema.validate(email);
  const validationPassword = passwordSchema.validate(password);
  if (validationEmail.error || validationPassword.error) {
    return false;
  }
  return true;
};

module.exports = {
  isFieldsAreValid,
};