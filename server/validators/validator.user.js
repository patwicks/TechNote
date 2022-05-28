const Joi = require("joi");

exports.userRequestValicator = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(15).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
exports.usernameValidator = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(15).required(),
  });
  return schema.validate(data);
};

exports.passwordValidator = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
