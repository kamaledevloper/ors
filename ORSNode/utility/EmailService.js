
var nodemailer = require("nodemailer");
var MailMessage = require('./MailMessage');
var EmailBuilder = require('./EmailBuilder');
const system = require("../resurce/system");

class EmailService {
    constructor() {
        
        this.serverConfig = {
            service: system.mail.service,
            auth: {
                user: system.mail.user,
                pass: system.mail.pass,
            }
        }
    }
    sendEmail(MailMessage, callback) {
        var email = {
            from: system.mail.user,
            to: MailMessage.to,
            subject: MailMessage.subject,
            html: MailMessage.message
        }
        console.log("gnbhoifgnodg", MailMessage.to);
        var transporter = nodemailer.createTransport(this.serverConfig);
        transporter.sendMail(email, function (error, info) {
            callback(error, info);

        });
    }


}
module.exports = EmailService;