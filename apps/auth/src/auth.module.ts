import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { AUTH_ENV_FILE_PATH, AuthEnvSchemaValidation } from '@app/auth-lib';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: AUTH_ENV_FILE_PATH, validationSchema: AuthEnvSchemaValidation })],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
