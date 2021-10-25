const dbUtils = require('../utils/db');

const env = process.env.NODE_ENV || 'development';
const config = require('dotenv').config({
  path: `./.env.${env}`,
});

const dbConnectionString = dbUtils.buildConnectionString(
  'mongodb',
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_NAME
);

module.exports = { dbConnectionString: dbConnectionString };
