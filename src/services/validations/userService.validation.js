const joi = require('joi');
const { User } = require('../../models');

const displayNameSchema = joi.string().min(8).required().messages({
  'string.min': '"displayName" length must be at least 8 characters long',
});
const passwordSchema = joi.string().min(6).required().messages({
  'string.min': '"password" length must be at least 6 characters long',
});
const emailSchema = joi.string().email().required().messages({
  'string.email': '"email" must be a valid email',
});
const imageSchema = joi.string().min(1);

const isFieldsAreValid = (displayName, password, email, image) => {
  const displayNameValidate = displayNameSchema.validate(displayName);
  if (displayNameValidate.error) return displayNameSchema;
  const passwordValidate = passwordSchema.validate(password);
  if (passwordValidate.error) return passwordValidate;
  const emailValidate = emailSchema.validate(email);
  if (emailValidate.error) return emailValidate;
  const imageValidate = imageSchema.validate(image);
  if (imageValidate.error) return imageValidate;
  return {};
};

const isAnExistingUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) return true;
  return false;
};

module.exports = {
  isFieldsAreValid,
  isAnExistingUser,
};