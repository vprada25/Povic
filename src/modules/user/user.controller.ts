import { Controller, Get } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import {UserService} from "./user.service";

@Controller ('user')
export class userController {
    constructor(private userService: UserService){}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers()

    }
}