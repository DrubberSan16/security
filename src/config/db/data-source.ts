import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  entities: ['dist/**/**.dao{.ts,.js}'],
  migrations: ['dist/**/**.migration{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;