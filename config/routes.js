'use-strict'

var basicRoute = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply("Hello World!").code(200).type('text/plain');
  }
};


module.exports = basicRoute;
