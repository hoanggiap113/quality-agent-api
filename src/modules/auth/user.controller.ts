import { Controller, Get, Inject } from "@nestjs/common";
import { UserOut } from "./dtos/user-out-dto";
import type { IUserService } from "./interfaces/user-service.interface";



@Controller("users")
export class UserController{
    constructor(
        @Inject('IUserService')
        private readonly userService: IUserService
    ){}
    @Get()
    async findUsers(): Promise<UserOut[]> { 
        return this.userService.findAll();
    }
}