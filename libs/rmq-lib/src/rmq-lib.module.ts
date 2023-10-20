import { Module } from '@nestjs/common';
import { RmqLibService } from './services';
import { CommonLibModule } from '@app/common-lib';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  providers: [RmqLibService],
  exports: [RmqLibService],
})
export class RmqLibModule {}
