const Student = require("../bean/Student");
const BaseService = require("./BaseService");
const CollegeService = require("./CollegeService");

class StudentService extends BaseService {

    
    findByPk(id, callback, ctx) {

        console.log("i am in find by PK ");

        var sql = "SELECT * FROM ST_STUDENT WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Student(), callback);
    }
    search(student, pageNo, pageSize, callback) {
        console.log("i am in search student" , pageNo , pageSize);
        var sql = "SELECT * FROM ST_STUDENT WHERE 1=1";
        if (student.collegeId) {
            sql += " and COLLEGE_ID = '" + student.collegeId + "'";
      
      console.log("College ID:",student.collegeID)
        }
/**sql += " AND FIRST_NAME LIKE '"+student.firstName+"%' "; */
        if (student.collegeName) {
            sql += " and COLLEGE_NAME like '" + student.collegeName + " %'";
        }
        if (student.firstName) {
            sql += " AND FIRST_NAME LIKE '" +student.firstName+"%' ";
        }
        if (student.lastName) {
            sql += " and LAST_NAME like '" + student.lastName+"%' ";
        }
        if (student.dob) {
            sql += " and DATE_OF_BIRTH = '" + student.dob + "'";
        }
        if (student.mobileNo) {
            sql += " and MOBILE_NO = '" + student.mobileNo + "'";
        }
        if (student.email) {
            sql += " and EMAIL = '" + student.email + "'";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new Student(), callback);

    }

    add(student, callback) {
        var sql = "SELECT * FROM ST_STUDENT WHERE EMAIL= ?"
        var param = [student.email];
        super.executeSQLForObject(sql, param, new Student(), function (err, result) {
            //console.log("add student in Student Service ", result);
            if (result == undefined) {
                var collegeser = new CollegeService();
                collegeser.findByPk(student.collegeId, function (err, college) {

                    console.log("student print data fbdfbdfb df", student.collegeId)
                    if (err) {
                        console.log("in error dsnbgdbngnb")
                        callback(err);
                    } else {

                        student.collegeName = college.name;

                        var sql = "INSERT INTO ST_STUDENT (FIRST_NAME,LAST_NAME,DATE_OF_BIRTH,MOBILE_NO,EMAIL,COLLEGE_ID,COLLEGE_NAME,CREATED_BY) VALUES (?,?,?,?,?,?,?,?)"

                        var params = [student.firstName, student.lastName, student.dob, student.mobileNo, student.email, student.collegeId, student.collegeName, student.createdBy]

                        console.log("params print in studnet service :::" + params)

                        var baseservice = new BaseService();

                        baseservice.executeSQL(sql, params, function (err, result) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(err, result.insertId)
                            }


                        });
                    }
                })
                console.log("add student in Student Service ", result);
            } else {
                var result = {};
                result.inputerror = {};
                result.inputerror.login = "";
                result.data = student;
                result.inputerror.login = "This login Id is taken"
                callback(result, err);
            }


        }
        )







        /*
        console.log("add mathod in student Ctl" + student)
        var sql = "INSERT INTO st_student (COLLEGE_ID,COLLEGE_NAME,FIRST_NAME,LAST_NAME,DATE_OF_BIRTH,MOBILE_NO,EMAIL) "
            + " VALUES ?,?,?,?,?,?";
        var params = [student.collegeID, student.collegeName, student.firstName, student.lastName, Student.dob, student.email];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.InsertId;
                var cService = new CollegeService();
                cService.findByPk(student.collegeID, function (cErr, college) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_student SET COLLEGE_NAME =? WHERE ID = ?";
                        var params = [college.name, pk];
                        cService.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, pk);
                        });
                    }
                }, ctx);
            }
        });*/
    };

    update(student, callback, ctx) {
        var sql = "UPDATE st_student SET  MODIFIED_DATETIME = NOW(), COLLEGE_ID=?,COLLEGE_NAME=?,FIRST_NAME=?,LAST_NAME=?,DATE_OF_BIRTH=?,MOBILE_NO=?,EMAIL=?  WHERE ID=?"
        var params = [student.collegeId, student.collegeName, student.firstName,
        student.lastName, student.dob, student.mobileNo, student.email, student.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var cService = new CollegeService();
                cService.findByPk(student.collegeId, function (cErr, college) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_student SET COLLEGE_NAME =? WHERE ID = ?";
                        var params = [college.name, student.id];
                        cService.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, result.affectedRows);
                        });
                    }
                }, ctx);

            }
        });
    }
    delete(id, callback, ctx) {
        super.delete(id, 'st_student', callback, ctx);
    }


}

module.exports = StudentService;