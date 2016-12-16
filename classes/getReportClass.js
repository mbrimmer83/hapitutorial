'use-strict'
//Simulates returning a report object

class getReport {
  constructor() {
    const cassandra = require('cassandra-driver');
    this.client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'testspace'});
    this.client.connect((err) => {
      console.log('Connection to Cassandra made!');
      if (err) {
        console.log(err.message);
      }
    });
  }

  getReport(object) {
    let self = this;
    return new Promise((resolve, reject) => {
      let query = self.getReportQuery(object);
      if (query != undefined) {
        this.client.execute(query, [], {prepare: true}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return resolve({
              'data': result,
              'message': "Your report was successfully generated!"
            });
          }
        });
      } else {
        return reject(new Error("dsReportId " + " is an invalid id!"));
      }

    });
  }

  getReportQuery(object) {
    const dbQueries = {
      '1': "select * from user;",
      '2': "select * from user;",
      '3': "select * from user;",
      '4': "select * from user;"
    }
    if (dbQueries[object.dsReportId]) {
      return dbQueries[object.dsReportId];
    }else {
      return undefined;
    }
  }
}

module.exports = new getReport();
