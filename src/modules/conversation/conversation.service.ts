import { Injectable } from "@nestjs/common";
import { AbstractService } from "src/common/abstract-service";
import { ConversationRepository } from "./conversation.repository";
import { Conversation } from "./conversation.entity";
import { ConversationCreate, ConversationOut, ConversationUpdate } from "./conversations.dto";


@Injectable()
export class ConversationService extends AbstractService<
    Conversation,
    ConversationOut,
    ConversationCreate,
    ConversationUpdate
> {
    constructor(private readonly conversationRepository: ConversationRepository) {
        super(conversationRepository);
    }

    //TODO
    async findByExternalId(
    channelId: string,
    externalConvId: string,
): Promise<ConversationOut | null> {
    const entity = await this.conversationRepository.findByExternalId(
        channelId,
        externalConvId,
    );
    return entity as unknown as ConversationOut | null;
}

}