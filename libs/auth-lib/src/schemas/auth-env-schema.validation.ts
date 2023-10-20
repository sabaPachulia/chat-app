import * as Joi from 'joi';

export const AuthEnvSchemaValidation = Joi.object({
  RABBITMQ_AUTH_QUEUE: Joi.string().required(),
  AUTH_PORT: Joi.number().required().default(3000),
});
