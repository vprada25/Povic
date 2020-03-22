import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './modules/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './common/providers/ormconfig.service';



@Module({
  imports: [CommonModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      useExisting: TypeOrmConfigService,

    }),
    
  ],
})
export class AppModule { }
