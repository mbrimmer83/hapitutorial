'use-strict'
// Checks to make sure all required parameters are present in the request
class requestParams {
  constructor() {

  }
  checkRequestParams(object) {
    let self = this;
    if (object.username != undefined && object.password != undefined && object.reportType != undefined && object.dsReportId != undefined) {
      return true;
    } else {
      return false;
    }
  }
  getParams(object) {
    let self = this;
    return new Promise((resolve, reject) => {
      if (self.checkRequestParams(object) === true) {
        this.authObject = {
          "username": object.username,
          "password": object.password
        };
        this.reportObject = {
          "reportType": object.reportType,
          "dsReportId": object.dsReportId,
          "beginDate": object.beginDate || null,
          "endDate": object.endDate || null
        }
        return resolve({
          'message': "Parameters match!",
          'status': true,
          'authObject': self.authObject,
          'reportObject': self.reportObject
        });

      } else {
        return reject(new Error("Missing required parameters!", {code:400}));
      }
    });
  }
}

module.exports = new requestParams();
