const env = process.env.NODE_ENV || 'development';

const config = require('dotenv').config({
  path: `./.env.${env}`,
});

// module.exports = { options };
