'use-strict'
// Checks to make sure all required parameters are present in the request
class requestParams {
  constructor(object) {
    this.paramsObject = object
  }
  checkRequestParams() {
    let self = this;
    if (this.paramsObject.username != undefined && this.paramsObject != undefined && this.paramsObject.reportType != undefined && this.paramsObject.dsReportId != undefined) {
      return true;
    } else {
      return false;
    }
  }
  getParams() {
    let self = this;
    return new Promise((resolve, reject) => {
      if (self.checkRequestParams() === true) {
        this.authObject = {
          "username": this.paramsObject.username,
          "password": this.paramsObject.password
        };
        this.reportObject = {
          "reportType": this.paramsObject.reportType,
          "dsReportId": this.paramsObject.dsReportId,
          "beginDate": this.paramsObject.beginDate || null,
          "endDate": this.paramsObject.endDate || null
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

module.exports = requestParams;
