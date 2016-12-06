'use-strict'
var reportRoute = {
  method: 'GET',
  path: '/{firstname}/{lastname}',
  handler: (request, reply) => {
    reply('Hello ' + encodeURIComponent(request.params.firstname) + " " + encodeURIComponent(request.params.lastname) + "!")
  },
  config: {
    description: 'Hello  to route params',
    notes: 'Say hello to a name given in route params',
    tags: ['API', 'greeting']
  }
}

module.exports = reportRoute;
