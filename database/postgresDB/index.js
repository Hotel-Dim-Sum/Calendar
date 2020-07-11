const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  database: 'airbnb',
  port: 5432,
});

client.connect();

module.exports = client;

