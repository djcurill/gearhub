import config from './config';
import express from 'express';

console.log(config);

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(config.port, () => {
  console.log(`Running server on port: ${config.port}`);
});
