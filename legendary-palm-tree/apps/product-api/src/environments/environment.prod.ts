import { IEnvironment } from './ienvironment';

export const environment: IEnvironment = {
  production: true,
  port: 3000,

  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    logging: process.env.DB_LOGGING
      ? JSON.parse(process.env.DB_LOGGING)
      : false,
    synchronize: process.env.DB_SYNCHRONIZE
      ? JSON.parse(process.env.DB_SYNCHRONIZE)
      : false,
  },
};
