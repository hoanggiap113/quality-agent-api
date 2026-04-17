import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Channel } from './channel.entity';
import { CHANNEL_STATUS } from 'src/common/enum';
import { AbstractRepository } from 'src/common/abstract-repository';

@Injectable()
export class ChannelRepository extends AbstractRepository<Channel> {
    constructor(
        @InjectRepository(Channel)
        private channelRepo: Repository<Channel>,
    ) {
        super(channelRepo);
    }

    async findActiveChannels(): Promise<Channel[]> {
        return this.channelRepo.find({
            where: { status: CHANNEL_STATUS.ACTIVE },
        });
    }

    async findByAppId(appId: string): Promise<Channel[]> {
        return this.channelRepo.find({
            where: { app_id: appId },
        });
    }
}