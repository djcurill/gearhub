const mongoose = require('mongoose');
const cuid = require('cuid');
const {
  connect,
  removeAllCollections,
  dropAllCollections,
} = require('./src/utils/db');

const url = 'mongodb://localhost:27017/testdb-';

const DISCONNECTED = 0;

beforeAll(async () => {
  await connect(url + `${cuid()}`);
});

// after every test, drop database and disconnect
afterEach(async () => {
  await removeAllCollections();
});

// notify jest we are done all tests
afterAll(async () => {
  await dropAllCollections();
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});
