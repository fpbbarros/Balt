'use strict'

const app = require('./app');
const http = require('http');
const debug = require('debug');

const port = normalizePort(process.env.port || '3333');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('api rodando ' + port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;

}

function onError(error) {
  if (error.syscall !== 'listem') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port :
    'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':

      console.error(bind + ' is alread in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

  debug('Listening on ' + bind);

}