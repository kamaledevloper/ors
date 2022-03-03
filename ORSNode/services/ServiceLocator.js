const RoleService = require("./RoleService");
const UserService = require("./UserService");
const CollegeService = require("./CollegeService");
const StudentService = require("./StudentService");
const SubjectService = require("./SubjectService");
const CourseService = require("./CourseService");
const FacultyService = require("./FacultyService");
const TimeTableService = require("./TimeTableService");

const MarksheetService = require("./MarksheetService");

class ServiceLocator {
  constructor() {
    this.db = "mysql";
  }
  static getUserService() {
    console.log("Hello i am from Service locator");
    return new UserService();
  }
  static getRoleService() {
    return new RoleService();
  }
  static getCollegeService() {
    console.log("i am in Service Locator");
    return new CollegeService();
  }

  static getStudentService() {
    console.log("i am in get Student Service");
    return new StudentService();
  }
  static getSubjectService() {
    console.log("i am in get Student Service");
    return new SubjectService();
  }
  static getCourseService() {
    console.log("i am in get Student Service");
    return new CourseService();
  }

  static getFacultyService() {
    console.log("i am in get Faculty Service");
    return new FacultyService();
  }

  static getTimeTableService() {
    console.log("i am in get TimeTableService Service");

    return new TimeTableService();
  }

  static getMarkSheetService() {
    console.log("i am in get TimeTableService Service");

    return new MarksheetService();
  }
}
module.exports = ServiceLocator;
