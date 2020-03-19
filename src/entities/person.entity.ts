import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    idPerson: number;

    @Column('varchar')
    firstName: string;

    @Column('varchar')
    secondname: string;

    @Column('varchar')
    lastname: string;

    @Column('varchar')
    secondsurname: string;

    @Column('varchar')
    address: string;

    @Column('varchar')
    estate: string;
}