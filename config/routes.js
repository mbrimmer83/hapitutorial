'use-strict'
const requestParams = require('../classes/requestParamsClass'),
      Authorization = require('../classes/authClass')
      getReport = require('../classes/getReportClass');

const basicRoute = {
  method: 'POST',
  path: '/api/v2.1/reports',
  handler: (request, reply) => {
    let newParams = new requestParams(request.payload)
    newParams.getParams()
    .then((response) => {
      // console.log("First");
      if (response.status === true) {
        return response
      }
    })
    .then((response) => {
      // console.log("Second");
      let auth = new Authorization(response.authObject);
      return auth.getAuthorization();
    })
    .then((response) => {
      // console.log("Third");
      let newReport = new getReport(request.payload);
      return newReport.getReport();
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

  }
};





module.exports = basicRoute;
