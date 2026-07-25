const nodemailer = require("nodemailer");

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ORDER_CONFIRMATION_EMAIL,
    pass: process.env.ORDER_CONFIRMATION_PASSWORD,
  },
});
module.exports.mailTransporter = mailTransporter;


const MAIL_FROM = `"Monk Scents" <${process.env.ORDER_CONFIRMATION_EMAIL}>`;
module.exports.MAIL_FROM = MAIL_FROM;

const adminMailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_NODEMAILER_EMAIL,
    pass: process.env.ADMIN_NODEMAILER_PASSWORD,
  },
});
module.exports.adminMailTransporter = adminMailTransporter;

const ADMIN_MAIL_FROM = `"Monk Scents" <${process.env.ADMIN_NODEMAILER_EMAIL}>`;
module.exports.ADMIN_MAIL_FROM = ADMIN_MAIL_FROM;
