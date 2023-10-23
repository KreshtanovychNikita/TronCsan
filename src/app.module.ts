import { Module } from '@nestjs/common';
import { ApiController } from './app.controller';
import { TronApiService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import typeOrmConfig from './orm/type-orm.config';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Transaction]),
  ],
  controllers: [ApiController],
  providers: [TronApiService, DatabaseService],
})
export class ApiModule {}
