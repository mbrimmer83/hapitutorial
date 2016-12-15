'use-strict'

const Code = require('code'),
      Lab = require('lab'),
      lab = exports.lab = Lab.script(),
      suite = lab.suite,
      test = lab.test,
      expect = Code.expect,
      before = lab.before,
      after = lab.after;

const requestParams = require('../classes/requestParamsClass');
let newParams;

suite('requestParamsClassTest', () => {
  before((done) => {
    newParams = new requestParams({
      "username": "mbrimmer",
      "password": "password",
      "reportType": "1",
      "dsReportId": "4",
      "beginDate": "1/1/2016",
      "endDate": "12/31/2016"
    });
    done();
  });

  test('newParams.checkRequestParams() returns true when required parameters are present!', (done) => {
      expect(newParams.checkRequestParams()).to.equal(true);
      done();
  });

  test('newParams.getParams() returns status true when parameters return successfully!', () => {
    return newParams.getParams()
    .then((object) => {
      expect(object.status).to.equal(true);
    });
  });
});

// before((done) => {
//   newParams = new requestParams({
//     "username": "mbrimmer",
//     "password": "password",
//     "reportType": "1",
//     "dsReportId": "4",
//     "beginDate": "1/1/2016",
//     "endDate": "12/31/2016"
//   });
//   done();
// });
//
// test('newParams.checkRequestParams() returns false when missing reportType!', () => {
//   expect(newParams.checkRequestParams()).to.equal(false);
// });
