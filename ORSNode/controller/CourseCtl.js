const ServiceLocator = require('../services/ServiceLocator');
var CourseBean = require('../bean/Course');
var BaseCtl = require('./BaseCtl');
const Course = require('../bean/Course');
class CourseCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getCourseService();
    }
    validate(body, callback) {
        console.log("validate call course ctl ");
        var pass = true;
        var result = {};
        result.inputerror = {};
        console.log(body.courseName + "laaaaaaaaaaa");
        if (!body.courseName) {
            result.inputerror.courseName = "Course Name is required";
            pass = false;
        }
        if (!body.courseDescription) {
            result.inputerror.courseDescription = "Course Description is required";
            pass = false;
        }
        if (!body.courseDuration) {
            result.inputerror.courseDuration = "Course Duration is required";
            pass = false;
        }

        if (pass == false) {
            callback(pass, result)
        } else {
            callback(pass)
        }
    }

   /* save() {
        console.log("i am in fsfbgf[grugb g et]htgbue gea");
    }*/
    getService() {

        console.log("get service call course ctl");
        return this.service;
    }
    getBean(request) {
        console.log("in get bean course CTL ");
        var course = new Course();
        course.populateRequest(request.body);
        return course;
    }


    preload(request, response) {
        console.log("i am in preload");
        var collegeservice = ServiceLocator.getCourseService();
        collegeservice.search("", null, null, function (err, result) {
            console.log(err);
            response.json(result.list);
        })
    }
}
module.exports = CourseCtl;