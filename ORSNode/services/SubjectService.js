var SubjectBean = require('../bean/Subject');
var BaseService = require('./BaseService');
var CourseService = require('./CourseService');

class SubjectService extends BaseService {

    findByPk(id, callback) {

        console.log("Find by Pk Course ");
        var sql = "SELECT * FROM st_subject WHERE ID=?";



        
        var params = [id];
        super.executeSQLForObject(sql, params, new SubjectBean(), callback);
    };

    findByName(sname, callback) {
        var sql = "SELECT * FROM st_subject WHERE SUBJECT_NAME=?";
        var params = [sname];
        super.executeSQLForObject(sql, params, new SubjectBean(), callback);
    };


    search(subject, pageNo, pageSize, callback) {
        var sql = "SELECT * FROM st_subject WHERE 1=1 ";
        if (subject.subjectName) {
            sql += "AND SUBJECT_NAME LIKE '" + subject.subjectName + "%' ";
        }
        if (subject.subjectDescription) {
            sql += "AND SUBJECT_DESCRIPTION LIKE '" + subject.subjectDescription + "%' ";
        }
        if (subject.courseId) {
            sql += "AND COURSE_ID = " + subject.courseId;
        }
        if (subject.courseName) {
            sql += " AND COURSE_NAME LIKE '" + subject.courseName + "%' ";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new SubjectBean(), callback);
    };
    add(subject, callback) {
        var sql = "SELECT * FROM st_subject WHERE SUBJECT_NAME=?";
        var params = [subject.subjectName];
        super.executeSQLForObject(sql, params, new SubjectBean(), function (err, result) {
            if (result == undefined) {
                var courseService = new CourseService();
                courseService.findByPk(subject.courseId, function (cErr, course) {
                    if (cErr) {
                        console.log("i am in error add mathod subject service ");
                        callback(cErr);
                    } else {
                        console.log("i am in error add mathod subject service aree else me ");
                        console.log("value of course name is ::", course.courseName);
                        subject.courseName = course.courseName;
                        var sql = "INSERT INTO st_subject (SUBJECT_NAME,SUBJECT_DESCRIPTION,COURSE_ID,COURSE_NAME,CREATED_BY,CREATED_DATETIME) VALUE (?,?,?,?,?,NOW())";
                        var params = [subject.subjectName, subject.subjectDescription, subject.courseId, subject.courseName, subject.createdBy];
                        var baseService = new BaseService();
                        baseService.executeSQL(sql, params, function (err, result) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(err, result.insertId);
                            }
                        });
                    }
                });

            } else {
                var result = {};
                result.inputerror = {};
                result.inputerror.login = "";
                result.data = subject;
                result.inputerror.login = "This Subject name is taken"
                callback(result, err);
            }

        });
    }
    update(subject, callback) {
        var courseService = new CourseService();
        courseService.findByPk(subject.courseId, function (cErr, course) {
            if (cErr) {
                callback(cErr);
            } else {
                subject.courseName = course.courseName;
                var sql = "UPDATE st_subject SET SUBJECT_NAME=? , SUBJECT_DESCRIPTION=? , COURSE_ID=?, COURSE_NAME=? , MODIFIED_BY=? ,MODIFIED_DATETIME=NOW() WHERE ID = ?";
                var params = [subject.subjectName, subject.subjectDescription, subject.courseId, subject.courseName, subject.modifiedBy, subject.id];
                var baseService = new BaseService();
                baseService.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertId);
                    }
                });
            }
        });

    }
    delete(id, callback) {
        super.delete(id, 'st_subject', callback);
    }
}
module.exports = SubjectService;