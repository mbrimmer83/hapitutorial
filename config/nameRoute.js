'use-strict'
const Authorization = require('../classes/authClass');

var reportRoute = {
  method: 'GET',
  path: '/{firstname}/{lastname}',
  handler: (request, reply) => {
    var auth = new Authorization({});
    auth.getAuthorization()
    .then((res) => {
      console.log(res);
      return reply('Hello ' + encodeURIComponent(request.params.firstname) + " " + encodeURIComponent(request.params.lastname) + "!").code(200);
    })

  },
  config: {
    description: 'Hello to route params',
    notes: 'Say hello to a name given in route params',
    tags: ['API', 'greeting']
  }
}

module.exports = reportRoute;
