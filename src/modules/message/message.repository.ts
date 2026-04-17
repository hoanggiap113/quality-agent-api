import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractRepository } from "src/common/abstract-repository";
import { Message } from "./message.entity";
import { Repository } from "typeorm";

@Injectable()
export class MessageRepository extends AbstractRepository<Message> {
    constructor(
        @InjectRepository(Message)
        private messageRepo: Repository<Message>,
    ){
        super(messageRepo)
    }
}
