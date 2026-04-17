import { Injectable } from '@nestjs/common';
import { Channel } from './channel.entity';
import { ChannelRepository } from './channel.repository';
import { ChannelOut } from './dtos/channel-out.dto';
import { CreateChannelDto, UpdateChannelDto } from './dtos/create-channel.dto';
import { AbstractService } from 'src/common/abstract-service';

@Injectable()
export class ChannelService extends AbstractService<
  Channel,
  ChannelOut,
  CreateChannelDto,
  UpdateChannelDto
> {
  constructor(private readonly channelRepository: ChannelRepository) {
    super(channelRepository);
  }

  override async create(payload: CreateChannelDto): Promise<ChannelOut> {
    return super.create(payload, ['name']);
  }

  override async update(id: string, payload: UpdateChannelDto): Promise<void> {
    return super.update(id, payload, ['name']);
  }

  async syncChannel(id: string): Promise<void> {
    const channel = await this.channelRepository.findById(id);
    //TODO
  }
}