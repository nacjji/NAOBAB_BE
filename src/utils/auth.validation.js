const Joi = require('joi');

exports.loginRequestSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
