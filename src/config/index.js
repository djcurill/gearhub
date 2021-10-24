const dotenv = require('dotenv');
import { buildConnectionString } from '../utils/db.js';

const env = process.env.NODE_ENV || 'development';

const config = dotenv.config(`./.env.${env}`);

const options = {
  env,
  isDev: env == 'development',
  isTest: env == 'testing',
  dbUrl: buildConnectionString(
    'mongodb',
    config.DB_HOST,
    config.DB_PORT,
    config.DB_NAME
  ),
};

export default options;
