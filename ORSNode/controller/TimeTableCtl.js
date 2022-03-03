const ServiceLocator = require("../services/ServiceLocator");
const BaseCtl = require("./BaseCtl");
const TimeTable = require("../bean/TimeTable");
const Response = require("../bean/Response");


class TimeTableCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getTimeTableService();
    }

    getBean(request) {
        console.log("Get bean Timetablectl")
        var timeTable = new TimeTable();
        timeTable.populateRequest(request.body);
        return timeTable;
    }
    getService() {
        console.log("i am in Timetable Ctl get Service");
        return this.service;
    };
    preload(request, response) {
        console.log("preload ::::");
        var result = {};
        var Subjectservice = ServiceLocator.getSubjectService();
        var TimeTableServicee = ServiceLocator.getTimeTableService();
        var CourseServicee = ServiceLocator.getCourseService();
        Subjectservice.search("", "", "", function (err, sub) {
            if (sub) {
                result.subjectList = sub.list
                CourseServicee.search("", "", "", function (err, cour) {
                    if (cour) {
                        result.courseList = cour.list;

                        TimeTableServicee.search("", "", "", function (err, timet) {
                            if (timet) {
                                result.Timetablelist = timet.list;
                                var res = new Response(err, result);
                                response.json(res);

                            }
                        })
                    }
                })
            }
        });
    }

    validate(body, callback) {

        console.log("validate call Timetable CtlS");
        var pass = true;
        var result = {};
        result.inputerror = {};
        if (!body.courseId) {
            result.inputerror.courseName = "Course  Name is required";
            pass = false;
        }
        if (!body.subjectId) {
            result.inputerror.subjectName = "Subject Name is required";
            pass = false;
        }
        if (!body.semester) {
            result.inputerror.semester = "Semester required is required";
            pass = false;
        }
        if (!body.examDate) {
            result.inputerror.examDate = "Exam Date is required";
            pass = false;
        }
        if (!body.examTime) {
            result.inputerror.examTime = "Exam Time is required";
            pass = false;
        }

        if (pass == false) {
            callback(pass, result)
        } else {
            callback(pass)
        }
    }
    /*
    
        add(request, responce) {
            var timetab = request.body
            this.validate(timetab, function (pass, result) {
    
                if (pass) {
    
    
                } else {
    
                    responce.json(result);
                }
    
    
    
            })
    
    
    
        }
    */
}
module.exports = TimeTableCtl;