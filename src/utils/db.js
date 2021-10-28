const mongoose = require('mongoose');

const connect = (url) => {
  return mongoose.connect(url, { useNewUrlParser: true });
};

const buildConnectionString = (protocol, host, port, name) => {
  return `${protocol}://${host}:${port}/${name}`;
};

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}

module.exports = { connect, buildConnectionString, removeAllCollections };
