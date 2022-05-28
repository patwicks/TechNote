const Joi = require("joi");

module.exports.taskValidator = (data) => {
  const schema = Joi.object({
    text: Joi.string().min(5).required(),
    status: Joi.string().required(),
  });
  return schema.validate(data);
};
