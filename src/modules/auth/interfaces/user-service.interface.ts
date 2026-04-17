import { UserOut } from "../dtos/user-out-dto";

export interface IUserService {
    findAll(): Promise<UserOut[]>;
}