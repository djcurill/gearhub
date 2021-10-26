const mongoose = require('mongoose');

const connect = (url) => {
  return mongoose.connect(url, { useNewUrlParser: true });
};

const buildConnectionString = (protocol, host, port, name) => {
  return `${protocol}://${host}:{port}/${name}`;
};

module.exports = { connect, buildConnectionString };
