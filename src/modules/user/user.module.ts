import { Module } from "@nestjs/common";
import { User } from "../../entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers: [],
    providers:[]
})
export class   UserModule{}