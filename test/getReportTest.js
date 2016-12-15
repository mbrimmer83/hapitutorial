'use-strict'

const Code = require('code'),
      Lab = require('lab'),
      lab = exports.lab = Lab.script(),
      suite = lab.suite,
      test = lab.test,
      expect = Code.expect,
      before = lab.before,
      after = lab.after;

const getReport = require('../classes/getReportClass');
const newReport = new getReport({
  "username": "mbrimmer",
  "password": "password",
  "reportType": "1",
  "dsReportId": "3",
  "beginDate": "1/1/2016",
  "endDate": "12/31/2016"
});

suite('getReportClassTest', () => {
  test('newReport.getReport() returns Your report was Successfully generated!', () => {
    return newReport.getReport()
    .then((object) => {
      expect(object.message).to.equal('Your report was successfully generated!');
    });
  });
});
