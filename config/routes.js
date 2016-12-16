'use-strict'
const requestParams = require('../classes/requestParamsClass'),
      Authorization = require('../classes/authClass')
      newReport = require('../classes/getReportClass');

const basicRoute = {
  method: 'POST',
  path: '/api/v2.1/reports',
  config: {
    handler: (request, reply) => {
      requestParams.getParams(request.payload)
      .then((response) => {
        if (response.status === true) {
          return response
        }
      })
      .then((response) => {
        return Authorization.getAuthorization(request.payload);
      })
      .then((response) => {
        return newReport.getReport(request.payload);
      })
      .then((report) => {
        console.log("This is the response: ", report.message);
        return reply(report).code(200).type('text/plain');
      })
      .catch((error) => {
        console.log("This is the error: ", error.message);
        console.log(error);
        return reply(error.message).code(400);
      })
    },
    description: 'Return report route',
    notes: 'Verify params, verify auth, and return report!',
    tags: ['api']
  }
};

module.exports = basicRoute;
