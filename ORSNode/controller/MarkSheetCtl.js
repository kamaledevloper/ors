const Marksheet = require("../bean/Marksheet");
const Response = require("../bean/Response");
const ServiceLocator = require("../services/ServiceLocator");
const BaseCtl = require("./BaseCtl");

class MarkSheetCtl extends BaseCtl {
  constructor() {
    super();

    this.service = ServiceLocator.getMarkSheetService();
  }

  getBean(request) {
    console.log("Get bean MarksheetCTL ");
    var marksheet = new Marksheet();

    marksheet.populateRequest(request.body);
    return marksheet;
  }
  getService() {
    console.log("i am in Marksheet Ctl get Service");
    return this.service;
  }

  preload(request, response) {
    console.log("preload ::::");
    var result = {};
    var StudentService = ServiceLocator.getStudentService();
    var MarksheetService = ServiceLocator.getMarkSheetService();

    StudentService.search("", "", "", function (err, stu) {
      if (stu) {
        result.studentList = stu.list;

        MarksheetService.search("", "", "", function (err, mar) {
          if (mar) {
            console.log("For markssheet service preload", mar);
            result.marksheetList = mar.list;
            var res = new Response(err, result);
            response.json(res);
          } else callback(err);
        });
      } else callback(err);
    });
  }

  validate(body, callback) {
    console.log("validate call Timetable CtlS");
    var pass = true;
    var result = {};
    result.inputerror = {};
    if (!body.rollNo) {
      result.inputerror.rollNo = "RollNumber is required";
      pass = false;
    }
    if (!body.studentId) {
      result.inputerror.name = "Name is required";
      pass = false;
    }
    if (!body.physics) {
      result.inputerror.physics = "Physics Number required is required";
      pass = false;
    }

    if (body.physics == 0) {
      result.inputerror.physics = " Number not less then 1";
      pass = false;
    }

    if (!body.chemistry) {
      result.inputerror.chemistry = "Chemistry Number required is required";
      pass = false;
    }
    if (body.chemistry == 0) {
      result.inputerror.chemistry = "Number not less then 1";
      pass = false;
    }
    if (!body.maths) {
      result.inputerror.maths = "Maths Number is required";
      pass = false;
    }

    if (body.maths == 0) {
      result.inputerror.maths = "Number not less then 1";
      pass = false;
    }

    if (pass == false) {
      callback(pass, result);
    } else {
      callback(pass);
    }
  }
}
module.exports = MarkSheetCtl;
