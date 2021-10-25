const express = require('express');
const config = require('./config/options.js');
const dbUtils = require('./utils/db');

const port = process.env.PORT;

const app = express();

const cnxn = dbUtils.connect(config.dbConnectionString);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Running server on port: ${port}`);
});
