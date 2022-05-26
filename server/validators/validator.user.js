const Joi = require("joi");

const authValidator = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(15).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports = { authValidator };
