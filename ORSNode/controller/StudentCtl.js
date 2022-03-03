const { response } = require("express");
var ServiceLocator = require("../services/ServiceLocator");
var StudentService = require("../services/StudentService");
var BaseCtl = require("../controller/BaseCtl");
const Student = require("../bean/Student");
const Response = require("../bean/Response");
class StudentCtl extends BaseCtl {
    constructor() {
        super();
        console.log("i am in Studnet CTL");
        this.service = ServiceLocator.getStudentService();
    }
    validate(body, callback) {
        var pass = true;
        var result = {};
        result.inputerror = {};
        if (!body.collegeId) {
            result.inputerror.collegeId = "College name is required";
            pass = false;
        }
        if (!body.firstName) {
            result.inputerror.firstName = "First name is required";
            pass = false;
        }
        if (!body.lastName) {
            result.inputerror.lastName = "Last name is required";
            pass = false;
        }
        if (!body.email) {
            result.inputerror.email = "email is required";
            pass = false;
        }/*
        if (!body.dob) {
            result.inputerror.dob = "date of birth is required";
            pass = false;
        }*/

        if (!body.mobileNo) {
            result.inputerror.mobileNo = "Mobile number is required";
            pass = false;
        }
        if (pass == false) {

            callback(pass, result)
        } else {
            callback(pass);
        }
    }
    preload(request, response) {
        var clgService = ServiceLocator.getCollegeService();

        console.log("i am in preload student ctl ", clgService);

        clgService.search('', null, null, function (err, result) {


            var res = new Response(err, result);

            response.json(res);
        }

        );
    }

    getBean(request) {
        var student = new Student();
        student.populateRequest(request.body);
        return student;

    }
    getService() {
        console.log("i am at Get Service ");
        return this.service;
    }

}
module.exports = StudentCtl;