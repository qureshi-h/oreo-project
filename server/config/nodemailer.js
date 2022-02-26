require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_ACCOUNT, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false,
    },
});

console.log("nodemailer is ready, can send email now");

module.exports = transporter;
