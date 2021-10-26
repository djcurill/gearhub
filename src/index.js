const express = require('express');
const config = require('./config/options.js').options;

const port = process.env.PORT;

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Running server on port: ${port}`);
});
