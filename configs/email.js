const nodemailer = require('nodemailer');

const email = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  service: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '7c05ed2b3e4813',
    pass: '2cf2f36a46b0ba'
  }

})

module.exports = email