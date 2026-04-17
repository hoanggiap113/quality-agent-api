import { Module } from "@nestjs/common";
import { Conversation } from "./conversation.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConversationController } from "./conversation.controller";
import { ConversationRepository } from "./conversation.repository";
import { ConversationService } from "./conversation.service";
import { Message } from "../message/message.entity";
import { ConversationScore } from "../scoring/conversation-score.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Conversation,Message,ConversationScore])],
  controllers: [ConversationController],
  providers: [
    ConversationRepository,
    ConversationService, 
  ],
  exports: [ConversationService],
})
export class ConversationModule {}