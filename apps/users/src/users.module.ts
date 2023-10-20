import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ConfigModule } from '@nestjs/config';
import { USERS_ENV_FILE_PATH, UsersEnvSchemaValidation } from '@app/users-lib';
import { CommonLibModule } from '@app/common-lib';
import { RmqLibModule } from '@app/rmq-lib';

@Module({
  imports: [
    RmqLibModule,
    CommonLibModule,
    ConfigModule.forRoot({ envFilePath: USERS_ENV_FILE_PATH, validationSchema: UsersEnvSchemaValidation }),
  ],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
