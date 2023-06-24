import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'banco',
  password: '123abc',
  database: 'sequelize',
  logging: false,
});

export default connection;
