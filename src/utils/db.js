const mongoose = require('mongoose');

const connect = async (url) => {
  return await mongoose.connect(url, { useNewUrlParser: true });
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

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collection);
  for (const collectionName of collections) {
    try {
      collection = mongoose.connection.collections[collectionName];
      await collection.drop();
    } catch (ex) {
      console.error(ex.message);
    }
  }
}

module.exports = {
  connect,
  buildConnectionString,
  removeAllCollections,
  dropAllCollections,
};
