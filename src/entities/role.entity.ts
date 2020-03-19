import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    idRole: number;

    @Column('varchar')
    NameRole: string;

    @Column('varchar')
    password: string;

    @OneToMany (type => User,users => users.role)
    users:User[];

}