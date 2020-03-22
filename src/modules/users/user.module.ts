import { Module } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { PersonService } from "./person/person.service";
import { Person } from "../../entities/person.entity";


@Module({
    imports:[TypeOrmModule.forFeature([User, Person])],
    controllers: [userController],
    providers:[UserService, PersonService]
})
export class   UserModule{}