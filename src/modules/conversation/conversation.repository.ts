import { Injectable } from "@nestjs/common";
import { AbstractRepository } from "src/common/abstract-repository";
import { Conversation } from "./conversation.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class ConversationRepository extends AbstractRepository<Conversation> {
    constructor(
        @InjectRepository(Conversation)
        private readonly conversationRepo: Repository<Conversation>,
    ) {
        super(conversationRepo);
    }

    async findByExternalId(
        channelId: string,
        externalConvId: string,
    ): Promise<Conversation | null> {
        return this.conversationRepo.findOne({
            where: {
                channel_id: channelId,
                external_conv_id: externalConvId,
            },
        });
    }
}