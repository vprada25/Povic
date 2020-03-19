import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Person } from "./person.entity";
import { type } from "os";
import { Role } from "./role.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column('varchar')
   UserName: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    estate: string;

    @OneToOne(type => Person)
    @JoinColumn({name:"idPerson"})
    person:Person;

    @ManyToOne(type => Role,role =>role.users)
    @JoinColumn({name:"idrol"})
    role:Role;

}