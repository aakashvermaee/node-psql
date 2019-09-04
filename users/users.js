// const user = require('./user');

const { client } = require('../db/db');

exports.getUsers = getUsers;
exports.getUserByEmail = getUserByEmail;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

async function getUsers(req, reply) {
  const query = 'SELECT * FROM PUBLIC.USERS';
  const clients = await client.query(query);
  reply.send({
    total: clients.rowCount,
    data: clients.rows
  });
}

async function getUserByEmail(req, reply) {
  const email = req.params.email;

  const query = 'SELECT * FROM PUBLIC.USERS WHERE email = $1';
  const clients = await client.query(query, [email]);

  reply.send({
    user: clients.rows
  });
}

async function createUser(req, reply) {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobile: req.body.mobile
  };

  const insertQuery = `INSERT INTO PUBLIC.USERS(firstname, lastname, email, mobile) VALUES($1, $2, $3, $4)`;

  await client
    .query(insertQuery, [user.firstname, user.lastname, user.email, user.mobile])
    .then(res => {
      reply.send({
        statusCode: 200,
        statusText: 'OK',
        message: 'User Created!'
      });
    })
    .catch(err => {
      reply.send({
        statusCode: 500,
        statusText: 'Internal Server Error',
        error: err
      });
    });
}

async function updateUser(req, reply) { }

async function deleteUser(req, reply) { }