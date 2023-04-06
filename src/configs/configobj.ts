import dotenv from 'dotenv';
dotenv.config();

export const config = Object.freeze({
  ///database
  dbName: process.env.MYSQL_DATABASE as string,
  dbUser: process.env.MYSQL_USER as string,
  dbPassword: process.env.MYSQL_PASSWORD as string,
  dbHost: process.env.MYSQL_HOST as string,
});
