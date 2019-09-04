const users = require('../users/users');

module.exports = function (fastify, options, done) {
  fastify.get('/', (req, reply) => {
    reply.send('Working!!!!');
  });

  userAPIRoutes(fastify, options);

  done();
}

// User API Routes
function userAPIRoutes(fastify, options) {
  fastify.get('/users', users.getUsers);
  fastify.get('/users/:email', users.getUserByEmail);
  fastify.post('/users', users.createUser);
  fastify.put('/users/:email', users.updateUser);
  fastify.delete('/users/:email', users.deleteUser);
}