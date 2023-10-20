import { Module } from '@nestjs/common';
import { UsersLibService } from './services';

@Module({
  providers: [UsersLibService],
  exports: [UsersLibService],
})
export class UsersLibModule {}
