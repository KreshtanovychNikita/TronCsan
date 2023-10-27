import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Transaction } from '../entities/transaction.entity';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'elogic',
  password: '123456789_qQ',
  database: 'troncase',
  entities: [Transaction],
  synchronize: true,
};

export default typeOrmConfig;
