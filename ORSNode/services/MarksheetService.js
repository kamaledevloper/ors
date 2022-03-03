const Marksheet = require("../bean/Marksheet");
const BaseService = require("./BaseService");
const StudentService = require("./StudentService");

class MarksheetService extends BaseService {
  findByPk(id, callback, ctx) {
    var sql = "SELECT * FROM ST_MARKSHEET WHERE ID = ?";
    var params = [id];
    super.executeSQLForObject(sql, params, new Marksheet(), callback);
  }

  add(marksheet, callback) {
    var sql = "SELECT * FROM st_marksheet WHERE ROLL_NO = ?";
    var params = [marksheet.rollNo];
    super.executeSQLForObject(
      sql,
      params,
      new Marksheet(),
      function (err, result) {
        if (result == undefined) {
          var studentser = new StudentService();

          studentser.findByPk(marksheet.studentId, function (err, result) {
            if (!err) {
              console.log("result print ::::", result);
              marksheet.name = result.firstName + " " + result.lastName;

              console.log("name print ::::::" + marksheet.name);

              var serv = new BaseService();
              var sql =
                "INSERT INTO st_marksheet (ROLL_NO,STUDENT_ID,NAME,PHYSICS,CHEMISTRY,MATHS) VALUES (?,?,?,?,?,?)";
              var params = [
                marksheet.rollNo,
                marksheet.studentId,
                marksheet.name,
                marksheet.physics,
                marksheet.chemistry,
                marksheet.maths,
              ];

              serv.executeSQL(sql, params, function (err, result) {
                if (err) {
                  callback(err);
                } else {
                  callback(err, result.insertId);
                }
              });
            } else {
              callback(err);
            }
          });
        } else {
          var result = {};
          result.inputerror = {};
          result.inputerror.login = "";
          result.data = marksheet;
          result.inputerror.login = "This Rollnumber is taken";
          callback(result, err);
        }
      }
    );
  }

  search(marksheet, pageNo, pageSize, callback) {
    console.log("search calling Timetabe service timetable print  ", marksheet);
    var sql = "SELECT * FROM st_marksheet WHERE 1=1 ";
   
    if (marksheet.rollNo) {
      sql += " AND ROLL_NO LIKE '" + marksheet.rollNo + "%' ";
    }
    if (marksheet.name) {
      sql += " AND NAME LIKE '" + marksheet.name + "%' ";
    }
    /*
    if (timetable.courseName) {
      sql += " AND COURSENAME LIKE '" + timetable.courseName + "%' ";
    }
    if (timetable.courseId) {
      sql += " AND COURSEID = '" + timetable.courseId + "'";

    }*/

    super.executeSQLForList(
      sql,
      { pageNo: pageNo, pageSize: pageSize },
      new Marksheet(),
      callback
    );
  }







}
module.exports = MarksheetService;
