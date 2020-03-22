import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { User } from "../../../entities/user.entity";
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

    @Put()
    async updateuser(@Param() @Body()user: User) {
        //const response = await this.userService.updateUser(user)
        return await this.userService.updateUser(user)
      //return `This action updates a #${user} user`;
    }

    @Delete(':idUser')
    async deleteUser(@Param('idUser') user:User) {
        return await this.userService.deleteUser
    //return `This action removes a #${user} user`;
    }

}

