import { Injectable } from "@nestjs/common";
import { AbstractService } from "src/common/abstract-service";
import { Message } from "./message.entity";
import { MessageCreate, MessageOut, MessageUpdate } from "./message.dto";
import { MessageRepository } from "./message.repository";
import { ConversationService } from "../conversation/conversation.service";
import { CONVERSATION_STATUS } from "src/common/enum";


@Injectable()
export class MessageService extends AbstractService<
    Message,
    MessageOut,
    MessageCreate,
    MessageUpdate
> {
    constructor(
        private readonly messageRepository: MessageRepository,
        private readonly conversationService: ConversationService
    ) {
        super(messageRepository)
    }

    override async create(payload: MessageCreate): Promise<MessageOut> {
        // 1. upsert conversation
        let conversation = await this.conversationService.findByExternalId(
            payload.channel_id,
            payload.external_conv_id,
        );

        if (!conversation) {
            conversation = await this.conversationService.create({
                channel_id: payload.channel_id,
                external_conv_id: payload.external_conv_id,
                customer_id: payload.customer_id,
                status: CONVERSATION_STATUS.OPEN,
                started_at: new Date().toISOString(),
            });
        }

        // B2: insert message
        const existing = await this.messageRepository.findByField(
            'external_message_id',
            payload.external_message_id,
        );

        if (existing) return existing as unknown as MessageOut;

        const message = await this.messageRepository.create({
            conversation_id: conversation.id,
            external_message_id: payload.external_message_id,
            sender_id: payload.sender_id,
            recipient_id: payload.recipient_id,
            sender_type: payload.sender_type,
            message: payload.message,
            timestamp: payload.timestamp,
        });

        return message as unknown as MessageOut;
    }

}