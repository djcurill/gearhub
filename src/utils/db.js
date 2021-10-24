import mongoose from 'mongoose';

const connect = (url) => {
  return mongoose.connect(url, { useNewUrlParser: true });
};

const buildConnectionString = (protocol, host, port, name) => {
  return `${protocol}://${host}:{port}/${name}`;
};

export { connect, buildConnectionString };
