'use-strict'
//Simulates returning a report object
class getReport {
  constructor(object) {
    this.reportObject = object;
  }
  getReport() {
    let self = this;
    return new Promise((resolve, reject) => {
      if (self.getReportQuery()) {
        return resolve({
          'data': "This is the report data!",
          'message': "Your report was successfully generated!"
        });
      } else {
        return reject(new Error("dsReportId " + this.reportObject.dsReportId + " is an invalid id!"));
      }

    })
  }

  getReportQuery() {
    const dbQueries = {
      '1': "query would be returned to run!",
      '2': "query would be returned to run!",
      '3': "query would be returned to run!",
      '4': "query would be returned to run!"
    }
    if (dbQueries[this.reportObject.dsReportId]) {
      return dbQueries[this.reportObject.dsReportId];
    }else {
      return undefined;
    }
  }
}

module.exports = getReport;
