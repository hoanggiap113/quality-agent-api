import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { MessageService } from "./message.service";
import { MessageCreate, MessageFilter, MessageOut } from "./message.dto";
import { PaginationResult } from "src/common/abstract-service";


@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService){}
    @Get()
    async findMessages(
        @Query() filter: MessageFilter,
    ): Promise<PaginationResult<MessageOut>> {
        return this.messageService.findAll(filter)
    }

    @Get(':id')
    async findMessageById(@Param('id') id: string): Promise<MessageOut>{
        return this.messageService.findById(id)
    }

    @Post('')
    async incoming(@Body() dto: MessageCreate): Promise<{ received: boolean }> {
        // TODO
        console.log('DTO: ', dto);
        return { received: true };
    }
 
    @Post('/batch')
    async incomingBatch(@Body() dto: MessageCreate[]): Promise<{ received: boolean; count: number }> {
        // TODO
        console.log('count:', dto.length);
        return { received: true, count: dto.length };
    }
}