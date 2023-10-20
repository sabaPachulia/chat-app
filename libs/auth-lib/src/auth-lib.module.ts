import { Module } from '@nestjs/common';
import { AuthLibService } from './services';

@Module({
  providers: [AuthLibService],
  exports: [AuthLibService],
})
export class AuthLibModule {}
