import { Controller, Get, Param, Query } from "@nestjs/common";
import { ConversationService } from "./conversation.service";
import { ConversationFilter, ConversationOut } from "./conversations.dto";
import { PaginationResult } from "src/common/abstract-service";


@Controller('conversations')
export class ConversationController {
    constructor(private readonly conversationService: ConversationService) {}

    @Get()
    async findConversations(
        @Query() filter: ConversationFilter,
    ): Promise<PaginationResult<ConversationOut>>{
        return this.conversationService.findAll(filter);
    }

    @Get(':id')
    async findCOnversations(@Param('id') id : string) : Promise<ConversationOut>{
        return this.conversationService.findById(id);
    }
}