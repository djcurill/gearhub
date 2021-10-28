const mongoose = require('mongoose');
const cuid = require('cuid');
const { connect, removeAllCollections } = require('./src/utils/db');
const url = 'mongodb://localhost:27017/testdb-';

beforeAll(async () => {
  await connect(url + cuid());
});

beforeEach(async (done) => {
  const db = cuid();

  function clearDb() {}
});

afterEach(async () => {
  await removeAllCollections();
});
