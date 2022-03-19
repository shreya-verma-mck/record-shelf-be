const Hapi = require('@hapi/hapi');
const Pino = require('hapi-pino');
const { USER_AUTH_SCHEME } = require('./constants/common');
const Routes = require('./routes');
const { authScheme } = require('./utils/auth');

process.on('unhandledRejection', (err) => {
  console.error(err);
});

const attachPlugins = async (server) => {
  await server.register({
    plugin: Pino,
    options: {
      prettyPrint: process.env.NODE_ENV !== 'production',
      redact: ['req.headers.authorization'],
      enabled: process.env.NODE_ENV !== 'test'
    },
  });
  server.auth.scheme(USER_AUTH_SCHEME, authScheme);
  server.auth.strategy(USER_AUTH_SCHEME, USER_AUTH_SCHEME);
};

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });
  await server.initialize();
  await attachPlugins(server);
  server.route(Routes);
  return server;
};

const start = async () => {
  const server = await init();
  await server.start();
};

module.exports = { init, start };
