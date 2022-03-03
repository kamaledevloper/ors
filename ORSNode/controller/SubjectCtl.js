var ServiceLocator = require('../services/ServiceLocator');
var BaseCtl = require('./BaseCtl');
var SubjectBean = require('../bean/Subject');

var DataValidator = require('../utility/DataValidator');

var Response = require('../bean/Response')
class SubjectCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getSubjectService();
    }
    validate(body, callback) {
        var pass = true;
        var result = {};
        result.inputerror = {};

        if (!body.subjectName) {
            result.inputerror.subjectName = "Subject Name is required";
            pass = false;
        } else if (!DataValidator.isName(body.subjectName)) {
            result.inputerror.subjectName = "Subject Name is Invalid";
            pass = false;
        }
        if (!body.subjectDescription) {
            result.inputerror.subjectDescription = "Subject Description is required";
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

    preload(request, response) {
        var courseService = ServiceLocator.getCourseService();
        courseService.search('', null, null, function (err, course) {

           // console.log("course print :::", course[0]);
            //            var result = {};
       //     result.course = course.data;
            var res = new Response(err, course);
            response.json(res)
        });
    }
    getService() {
        return this.service;
    }
    getBean(request) {
        var subject = new SubjectBean();
        subject.populateRequest(request.body);
        return subject;
    }
}
module.exports = SubjectCtl;