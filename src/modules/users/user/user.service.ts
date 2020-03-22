import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../../entities/user.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async findUser(idUser: number): Promise<User> {
        try {
          return await this.userRepository.findOne(idUser);
        } catch (error) {
          return error
        }
      }

      async getUsers(): Promise<User[]> {
        try {
          return await this.userRepository.find();
        } catch (error) {
          return error
        }
      }
      
      async createUser(data: User): Promise<User> {
        try {
          return await this.userRepository.save({...data})
        } catch (error) {
          return error;
        }
      }

      async updateUser(data:User): Promise<User> {
        try {
          let user = await this.findUser(data.idUser);
          if(user){
            return await this.userRepository.save({...data})
          }
        } catch (error) {
          return error;
        }
      }

      async deleteUser(idUser: number): Promise<any> {
        try {
            return await this.userRepository.delete(idUser);
        } catch (error) {
          return error;
        }
      }
}