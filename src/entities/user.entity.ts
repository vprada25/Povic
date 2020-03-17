import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idUsers: number;

    @Column('varchar')
    firstNameUsers: string;

    @Column('varchar')
    lastNameUsers: string;

    @Column('varchar')
    ageUsers: number;

}