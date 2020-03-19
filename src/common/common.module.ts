import { Module, Global } from '@nestjs/common';
import { TypeOrmConfigService } from './providers/ormconfig.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/enviroment.config';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            envFilePath: process.cwd() + '/environments/development.env',
            isGlobal: true,
        }),

    ],
    providers:[TypeOrmConfigService],
    exports: [TypeOrmConfigService]
})
export class CommonModule { }