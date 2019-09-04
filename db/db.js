const { database } = require('../config/config');

const pg = require('pg');

const db_config = {
  host: database.db_host,
  port: database.db_port,
  password: database.db_password,
  user: database.db_user,
  database: database.db
};

const client = new pg.Client(db_config);

connectClient();

async function connectClient() {
  try {
    client.connect();
    console.log('Connected!')
  } catch (err) {
    console.error(err)
  };
}

exports.client = client;