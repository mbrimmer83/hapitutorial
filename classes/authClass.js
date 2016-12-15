'use-strict'
// Simulates authorization and uses setTimeout for async
class Authorization {
  constructor(object) {
    this.username = object.username;
    this.password = object.password;
  }
  getAuthorization() {
    let self = this;
    return new Promise((resolve, reject) => {
      if (this.username === 'mbrimmer' && this.password === 'password') {
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

module.exports = Authorization;
