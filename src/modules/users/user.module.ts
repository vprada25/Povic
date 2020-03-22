import { Module } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userController } from "./user/user.controller";
import { UserService } from "./user/user.service";


@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers: [userController],
    providers:[UserService]
})
export class   UserModule{}