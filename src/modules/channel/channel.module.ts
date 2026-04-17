import { Module } from "@nestjs/common";
import { Channel } from "./channel.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChannelController } from "./channel.controller";
import { ChannelService } from "./channel.service";
import { ChannelRepository } from "./channel.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Channel])],
  controllers: [ChannelController],
  providers: [
    ChannelRepository,
    ChannelService, 
  ],
  exports: [ChannelService],
})
export class ChannelModule {}