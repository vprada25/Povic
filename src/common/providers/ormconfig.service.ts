import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { User } from "../../entities/user.entity";
import { Person } from "../../entities/person.entity";
import { Role } from "../../entities/role.entity";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {
    console.log(this.getOrmConfig())
  }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...this.getOrmConfig(),
      entities: [
        User,
        Person,
        Role
      ],
    };
  }
  getOrmConfig(): any {
    return {
      type: this.config.get('database.DB_TYPE'),
      host: this.config.get('database.DB_HOST'),
      port: this.config.get('database.DB_PORT'),
      username: this.config.get('database.DB_USERNAME'),
      password: this.config.get('database.DB_PASSWORD'),
      database: this.config.get('database.DB_DATABASE'),
      synchronize: this.config.get('database.BD_SYNCHRONIZE'),
    }
  }
}





