import * as Joi from 'joi';

export const UsersEnvSchemaValidation = Joi.object({
  RABBITMQ_USERS_QUEUE: Joi.string().required(),
});
