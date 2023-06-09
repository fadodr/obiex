import { Sequelize } from 'sequelize';
import { config } from './configobj';


console.log(config.dbHost);
export const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        // host: config.dbHost,
        dialect: 'mysql',
    }
);
