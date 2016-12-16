'use-strict'
// Simulates authorization and uses setTimeout for async
class Authorization {
  constructor() {

  }
  getAuthorization(object) {
    let self = this;
    return new Promise((resolve, reject) => {
      if (object.username === 'mbrimmer' && object.password === 'password') {
        setTimeout(() => {
          return resolve({
            'Authorization': 'approved',
            'message': 'You are approved!'
          });
        }, 1000);
      } else {
        setTimeout(() => {
          return reject(new Error('Username or password does not match!'));
        }, 1000);
      }
    });
  }
}

module.exports = new Authorization();
