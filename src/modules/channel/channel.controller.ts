import { Body, Controller, Delete, Get,Param, Patch, Post, Query } from "@nestjs/common";
import { ChannelOut } from "./dtos/channel-out.dto";
import { CreateChannelDto, UpdateChannelDto } from "./dtos/create-channel.dto";
import { ChannelService } from "./channel.service";
import { ChannelFilterDto } from "./dtos/channel-filter.dto";
import { PaginationResult } from "src/common/abstract-service";


@Controller('channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async findChannels(
    @Query() filter: ChannelFilterDto,
  ): Promise<PaginationResult<ChannelOut>> {
    return this.channelService.findAll(filter); 
  }

  @Get(':id')
  async findChannelById(@Param('id') id: string): Promise<ChannelOut> {
    return this.channelService.findById(id); 
  }

  @Post()
  async createChannel(@Body() dto: CreateChannelDto): Promise<ChannelOut> {
    return this.channelService.create(dto); 
  }

  @Patch(':id')
  async updateChannel(
    @Param('id') id: string,
    @Body() dto: UpdateChannelDto,
  ): Promise<void> {
    return this.channelService.update(id, dto); 
  }

  @Delete(':id')
  async deleteChannel(@Param('id') id: string): Promise<void> {
    return this.channelService.delete(id); 
  }

  @Post(':id/sync')
  async syncChannel(@Param('id') id: string): Promise<void> {
    return this.channelService.syncChannel(id); 
  }
}