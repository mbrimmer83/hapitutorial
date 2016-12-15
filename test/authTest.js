'use-strict'

const Code = require('code'),
      Lab = require('lab'),
      lab = exports.lab = Lab.script(),
      suite = lab.suite,
      test = lab.test,
      expect = Code.expect,
      before = lab.before,
      after = lab.after;

const auth = require('../classes/authClass');
const newAuth = new auth({
  "username": "mbrimmer",
  "password": "password",
  "reportType": "1",
  "dsReportId": "4",
  "beginDate": "1/1/2016",
  "endDate": "12/31/2016"
});

suite('authClassTest', () => {
  test('newAuth.getAuthorization() returns approved', () => {
    return newAuth.getAuthorization()
    .then((object) => {
      expect(object.Authorization).to.equal('approved');
      expect(object.message).to.equal('You are approved!');
    });
  });
});
