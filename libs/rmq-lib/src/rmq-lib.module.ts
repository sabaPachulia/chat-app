import { Module } from '@nestjs/common';
import { RmqLibService } from './services';

@Module({
  providers: [RmqLibService],
  exports: [RmqLibService],
})
export class RmqLibModule {}
