const mongoose = require('mongoose');
const cuid = require('cuid');
const { connect, removeAllCollections } = require('./src/utils/db');
const url = 'mongodb://localhost:27017/testdb-';

const DISCONNECTED = 0;

// Before each tests:
// If db is is disconnected: Connect, clear db, catch error
// otherwise: just clear the db
beforeEach(async (done) => {
  const db = cuid();
  // code goes here
  function clearDb() {}
});

// after every test, drop database and disconnect
afterEach((done) => {
  mongoose.connection.db.dropDatabase();
  mongoose.disconnect();
  return done();
});

// notify jest we are done all tests
afterAll((done) => {
  return done();
});
