class Response {

    constructor(err, result) {


   //     console.log("result print in responce::::" , result);
        this.sucess = false;
        this.result = '';
        if (err) {
            this.sucess = false;
            this.result = err;
        } else {
            this.sucess = true;
            this.result = result;
        }
    };
}

module.exports = Response;

