const newrelic = require('newrelic');
const { Client } = require('pg');

const client = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'airbnb',
  //password: '1234'
  port: 5432,
});

client.connect();

module.exports = client;