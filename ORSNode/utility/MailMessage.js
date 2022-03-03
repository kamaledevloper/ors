class MailMessage {

    constructor() {
        this.to = ''
        this.cc = ''
        this.bcc = ''
        this.subject = ''
        this.message = ''
        this.html = ''
    }
    addTo(to) {
        this.to += ',' + to;
    }
    addCC(cc) {

        this.cc += ',' + to;
    }
}
module.exports = MailMessage;