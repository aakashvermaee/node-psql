'use strict';

const config = require('./config/config');

const fastify = require('fastify');

const app = fastify({
  logger: true
});

app.register(require('./routes/routes'), {
  prefix: '/api'
});

app.listen(config.port, config.host, (err) => {
  if (err) throw err;

  console.log(`App running on: http://${config.host}:${config.port}`)
});