import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Person } from "src/entities/person.entity";

@Injectable()
export class PersonService {

    constructor(@InjectRepository(Person) private readonly personRepository: Repository<Person>){}

    async findPerson(idPerson: number): Promise<Person> {
        try {
          return await this.personRepository.findOne(idPerson);
        } catch (error) {
          return error
        }
      }

    
      async createPerson(data:Person): Promise<Person> {
        try {
          return await this.personRepository.save({...data})
        } catch (error) {
          return error;
        }
      }

      async updatePerson(data:Person): Promise<Person> {
        try {
          let person = await this.findPerson(data.idPerson);
          if(person){
            return await this.personRepository.save({...data})
          }
        } catch (error) {
          return error;
        }
      }


      async deletePerson(idPerson	: number): Promise<any> {
        try {
            return await this.personRepository.delete(idPerson);
        } catch (error) {
          return error;
        }
      }

}