import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { Conversation } from "../conversation/conversation.entity";
import { MessageController } from "./message.controller";
import { MessageRepository } from "./message.repository";
import { MessageService } from "./message.service";
import { ChannelService } from "../channel/channel.service";
import { ChannelRepository } from "../channel/channel.repository";
import { Channel } from "../channel/channel.entity";
import { ConversationModule } from "../conversation/conversation.module";



@Module({
    imports: [TypeOrmModule.forFeature([Message, Conversation, Channel]),
        ConversationModule,

    ],
    controllers: [MessageController],
    providers: [
        MessageRepository,
        MessageService,
        ChannelService,
        ChannelRepository
    ],
    exports: [MessageService]
})
export class MessageModule { }