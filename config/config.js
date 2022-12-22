require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: 'naobab_db',
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '+09:00',
  },
  test: {
    username: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: 'naobab_test_db',
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '+09:00',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
