declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    MYSQL_HOST: string;
    MYSQL_PORT: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE: string;
  }
}

declare interface User {
  openid: string;
  name: string;
  phone: string;
}

declare interface LuckyData {
  [key: string]: User[];
}

declare interface ErrorData extends Array<User> { }