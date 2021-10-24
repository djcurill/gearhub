import { buildConnectionString } from '../utils/db.js';

const env = process.env.NODE_ENV || 'development';

const config = require('dotenv').config({
  path: `./.env.${env}`,
});

console.log(config);

const options = {
  env,
  isDev: env == 'development',
  isTest: env == 'testing',
  port: config.PORT,
  dbPort: config.DB_PORT,
  dbHost: config.DB_HOST,
  dbName: config.DB_NAME,
  dbUrl: buildConnectionString(
    'mongodb',
    config.DB_HOST,
    config.DB_PORT,
    config.DB_NAME
  ),
};

export default options;
