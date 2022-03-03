const ServiceLocator = require("../services/ServiceLocator");
var Response = require("../bean/Response");

var DataValidator = require("../utility/DataValidator");

var Faculty = require('../bean/Faculty');
const BaseCtl = require("./BaseCtl");

class FacultyCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getFacultyService();
    }

    validate(body, callback) {


        console.log("validate call Faculty CTL");
        var pass = true;
        var result = {};
        result.inputerror = {};
        console.log("body print ::" + body.firstName + body.lastName)
        if (!body.firstName) {
            result.inputerror.firstName = "First Name is required";
            pass = false;
        } else if (!DataValidator.isFirstName(body.lastName)) {
            result.inputerror.lastName = "Last Name is Invalid";
            pass = false;
        }
        if (!body.lastName) {
            result.inputerror.lastName = "Last Name is required";
            pass = false;
        } else if (!DataValidator.isName(body.lastName)) {
            result.inputerror.lastName = "Last Name is Invalid";
            pass = false;
        }
        if (!body.email) {
            result.inputerror.email = "Email is Required";
            pass = false;
        } else if (!DataValidator.isEmail(body.email)) {
            result.inputerror.email = "Email is Invalid";
            pass = false;
        }
        /*if (!body.password) {
            result.inputerror.password = "Password is required";
            pass = false;
        } else if(!DataValidator.isPassword(body.password)){
            result.inputerror.password = "Password is Invalid"
            pass = false;
        }*/
        if (!body.dob) {
            result.inputerror.dob = "DOB is required";
            pass = false;
        }
        if (!body.mobileNo) {
            result.inputerror.mobileNo = "Mobile No is required";
            pass = false;
        } else if (!DataValidator.isMobileNo(body.mobileNo)) {
            result.inputerror.mobileNo = "Mobile No is invalid";
            pass = false;
        }
        /*
        if (!body.address) {
            result.inputerror.address = "College Address is required";
            pass = false;
        }*/
        if (!body.gender) {
            result.inputerror.gender = "Gender is required";
            pass = false;
        }
        if (!body.collegeId) {
            result.inputerror.collegeId = "College Name is required";
            pass = false;
        }
        if (!body.subjectId) {
            result.inputerror.subjectId = "Subject Name is required";
            pass = false;
        }
        if (!body.courseId) {
            result.inputerror.courseId = "Course Name is required";
            pass = false;
        }
        if (pass == false) {
            callback(pass, result)
        } else {
            callback(pass)
        }
    }
    preload(request, responce) {
        var collegeService = ServiceLocator.getCollegeService();
        var courseservice = ServiceLocator.getCourseService();
        var subjectservice = ServiceLocator.getSubjectService();
        var result = {};
        collegeService.search('', null, null, function (err, college) {
            if (!err) {
                result.collegeList = college.list;
                courseservice.search('', null, null, function (err, course) {
                    if (!err) {
                        result.courseList = course.list;
                        subjectservice.search('', null, null, function (err, subject) {
                            if (!err) {
                                result.subjectList = subject.list;
                                var res = new Response(err, result);
                                responce.json(res);
                            }
                        });
                    }
                });
            }
            console.log("result Print In faculty CTL:" + result);

        }
        )
    }
    getService() {
        return this.service;
    }
    getBean(request) {
        var faculty = new Faculty();

        faculty.populateRequest(request.body);
        return faculty;
    }
}

module.exports = FacultyCtl;