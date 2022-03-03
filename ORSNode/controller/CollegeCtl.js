const College = require("../bean/College");
const ServiceLocator = require("../services/ServiceLocator");
const BaseCtl = require("./BaseCtl");
const CollegeService = require("../services/CollegeService");
const Response = require('../bean/Response');
class CollegeCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getCollegeService();
    }
    getBean(request) {
        var college = new College();
        college.populateRequest(request.body);
        return college;
    }
    getService() {
        return this.service;
    };
   preload(request, response) {
        console.log("i am in preload");
  
       

  

        var collegeservice = ServiceLocator.getCollegeService();
        
        collegeservice.search("", null, null, function (err, result) {
            console.log(err);
            var res = new Response(err, result);
            response.json(res);
        })
    }

    validate(body, callback) {
        var pass = true;
        var result = {};
        result.inputerror = {};
        if (!body.name) {
            result.inputerror.name = "College Name is required";
            pass = false;
        }
        if (!body.address) {
            result.inputerror.address = "College Address is required";
            pass = false;
        }
        if (!body.city) {
            result.inputerror.city = "College City is required";
            pass = false;
        }
        if (!body.state) {
            result.inputerror.state = "College State is required";
            pass = false;
        }
        if (!body.phoneNo) {
            result.inputerror.phoneNo = "College PhoneNo is required";
            pass = false;
        }

        if (pass == false) {
            callback(pass, result)
        } else {
            callback(pass)
        }
    }
}
module.exports = CollegeCtl;