import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import {UserService} from "./user.service";

@Controller ('user')
export class userController {
    constructor(private userService: UserService){}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers()
    }

    @Get(":idUser")
    async findUser(@Param("idUser")idUser): Promise<User>{
        return await this.userService.findUser(idUser)
    } 
    
    @Post()
    async createUser(@Body()user): Promise<User>{
        return await this.userService.createUser(user)
    } 
}