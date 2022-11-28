export interface IEnvironment {
  production: boolean;
  port: number;

  database: {
    type: string;
    host: string;
    database: string;
    port: number;
    username: string;
    password: string;
    logging: boolean;
    synchronize: boolean;
  };
}
