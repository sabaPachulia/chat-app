import * as Joi from 'joi';

export const GlobalEnvSchemaValidation = Joi.object({
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  RABBITMQ_DEFAULT_USER: Joi.string().required(),
  RABBITMQ_DEFAULT_PASS: Joi.string().required(),
  RABBITMQ_BASE_URL: Joi.string().required().default('amqp://'),
  RABBITMQ_HOST: Joi.string().required(),
});
