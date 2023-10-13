import { DataSource } from 'typeorm';
export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Jorge',
  password: 'postgres',
  database: 'to_do',
  migrations: ['migrations/**'],
  entities: ['dist/**/*.entity{.ts,.js}'],
});
PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
