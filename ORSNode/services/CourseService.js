const Course = require('../bean/Course');
var CourseBean = require('../bean/Course');
var BaseService = require('../services/BaseService');
class CourseService extends BaseService {
    findByPk(id, callback) {

        console.log("find by Pk course service Running ")
        var sql = "SELECT * FROM st_course WHERE ID = ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Course(), callback);
    }



    findByName(name, callback) {
        var sql = "SELECT * FROM st_course WHERE NAME = ?";
        var params = [name];
        super.executeSQLForObject(sql, params, new Course(), callback);
    }


    search(course, pageNo, pageSize, callback) {
        var sql = "SELECT * FROM st_course WHERE 1=1 ";
        if (course.courseName) {
            sql += " AND NAME LIKE '" + course.courseName + "%' ";
        }
        if (course.courseDescription) {
            sql += " AND DESCRIPTION LIKE '" + course.courseDescription + "%' ";
        }
        if (course.courseDuration) {
            sql += " AND COURSE_DURATION LIKE '" + course.courseDuration + "%' ";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new Course(), callback);
    }
    add(course, callback) {
        var sql = "SELECT * FROM st_course WHERE NAME = ?";
        var params = [course.courseName];
        super.executeSQLForObject(sql, params, new Course(), function (err, result) {
            if (result == undefined) {
                var serv = new BaseService();
                var sql = "INSERT INTO st_course (NAME,DESCRIPTION,COURSE_DURATION,CREATED_BY,CREATED_DATETIME) VALUES (?,?,?,?,NOW())"
                var params = [course.courseName, course.courseDescription, course.courseDuration, course.createdBy];
                serv.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertId);
                    }
                });
            } else {
                var result = {};
                result.inputerror = {};
                result.inputerror.login = "";
                result.data = course;
                result.inputerror.login = "This Course name is taken"
                callback(result, err);

            }
        });
    }

    update(course, callback) {
        console.log("i am in update course ");
        var sql = "UPDATE st_course SET NAME=?,DESCRIPTION=?,COURSE_DURATION=?,CREATED_BY=?,ModifiedDateTime=NOW() WHERE ID=?"
        var params = [course.courseName, course.courseDescription, course.courseDuration, course.modifiedBy, course.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        });
    }

    delete(id, callback) {
        super.delete(id, 'st_course', callback);
    }

}
module.exports = CourseService;