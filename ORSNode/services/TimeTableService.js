const res = require("express/lib/response");
const TimeTable = require("../bean/TimeTable");
const DataUtility = require("../utility/DataUtility");
const BaseService = require("./BaseService");
const CourseService = require("./CourseService");
const SubjectService = require("./SubjectService");

class TimeTableService extends BaseService {
  search(timetable, pageNo, pageSize, callback) {
    console.log("search calling Timetabe service timetable print  ", timetable);
    var sql = "SELECT * FROM st_timetable WHERE 1=1 ";
    if (timetable.semester) {
      sql += " AND SEMESTER LIKE '" + timetable.semester + "%' ";
    }
    if (timetable.subjectName) {
      sql += " AND SUBJECTNAME LIKE '" + timetable.subjectName + "%' ";
    }
    if (timetable.courseName) {
      sql += " AND COURSENAME LIKE '" + timetable.courseName + "%' ";
    }





    if (timetable.courseId) {
      sql += " AND COURSEID = '" + timetable.courseId + "'";

    }

    super.executeSQLForList(
      sql,
      { pageNo: pageNo, pageSize: pageSize },
      new TimeTable(),
      callback
    );
  }

  add(timetable, callback) {
    var subjectservice = new SubjectService();
    var courseservice = new CourseService();
    subjectservice.findByPk(timetable.subjectId, function (err, subject) {
      if (!err) {
        console.log("Subject object print ", subject);
        timetable.subjectName = subject.subjectName;
      } else {
        callback(err);
      }
      courseservice.findByPk(timetable.courseId, function (err, course) {
        if (!err) {
          console.log("Course object print ", course);
          timetable.courseName = course.courseName;
        } else {
          console.log("Error print course service find by pk ", err);
          callback(err);
        }

        var baseservice = new BaseService();
        var sqlvalidate =
          "SELECT * FROM st_timetable WHERE subjectName = ? AND courseName = ? AND Semester = ?";

        var paramsvalidate = [
          timetable.subjectName,
          timetable.courseName,
          timetable.semester,
        ];
        baseservice.executeSQLForObject(
          sqlvalidate,
          paramsvalidate,
          new TimeTable(),
          function (err, ress) {
            if (!err) {
              console.log("result print :::", ress);
              var result = {};
              result.inputerror = {};
              // result.inputerror= "";
              result.message = {};

              result.message =
                "Exam allready seduled for this course and subject";

              result.inputerror =
                "Exam allready seduled for this course and subject";
              callback(result, err);
            } else {
              console.log("Error print :::", err);
              var sql =
                "INSERT INTO st_timetable (SubjectId,subjectName,CourseId,courseName,Semester,ExamDate,ExamTime) VALUES(?,?,?,?,?,?,?) ";
              var params = [
                timetable.subjectId,
                timetable.subjectName,
                timetable.courseId,
                timetable.courseName,
                timetable.semester,
                timetable.examDate,
                timetable.examTime,
              ];
              baseservice.executeSQL(sql, params, function (err, result) {
                if (err) {
                  callback(err);
                } else {
                  var pk = result.insertId;

                  console.log("Pk print ::: " + pk);
                  callback(err, pk);
                }
              });
            }
          }
        );
      });
    });
  }
}

module.exports = TimeTableService;
