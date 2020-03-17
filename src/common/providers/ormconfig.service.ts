import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...this.getOrmConfig(),
      entities: [
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
      synchronize: this.config.get('database.DB_DATABASE'),
    }
  }
}





