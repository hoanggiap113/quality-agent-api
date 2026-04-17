import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { IUserService } from "./interfaces/user-service.interface";
import { UserOut } from "./dtos/user-out-dto";



@Injectable()
export class UserService implements IUserService{
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>,
    ) {}

    async findAll() : Promise<UserOut[]>{
        return this.repo.find({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            }
        })
    }
}