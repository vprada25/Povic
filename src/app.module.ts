import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './common/providers/ormconfig.service';
import { PerModule } from './modules/per/per.module';

@Module({
  imports: [CommonModule, 
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      useExisting: TypeOrmConfigService,
  
}),
    PerModule,],
})
export class AppModule {}
