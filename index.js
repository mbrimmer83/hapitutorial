'use strict';

const Hapi = require('hapi'),
  Inert = require('inert'),
  Vision = require('vision'),
  Path = require('path'),
  HapiSwagger = require('hapi-swagger'),
  Pack = require('./package'),
  routes = require('./config/routes');


const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});

server.connection({
  port: process.env.PORT || 3030,
  host: 'localhost'
});

const options = {
  info: {
    'title': 'Sample API',
    'version': Pack.version
  }
}

server.register([Vision, Inert, {
  'register': HapiSwagger,
  'options': options
}], (err) => {
  if (err) {
    throw err
    console.log(err);
  }
});
server.route(routes);

server.start((err) => {
  if (err) {
    console.log(err);
    throw err
  }
  console.log("Serving on port: " + server.info.port + "!");
});
