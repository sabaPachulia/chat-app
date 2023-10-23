import * as Joi from 'joi';

export const UsersEnvSchemaValidation = Joi.object({
  RABBITMQ_USERS_QUEUE: Joi.string().required(),
  USERS_PORT: Joi.string().required().default(3001),
});
