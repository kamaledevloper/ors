const Faculty = require("../bean/Faculty");
const BaseService = require("./BaseService");
const CollegeService = require("./CollegeService");
const CourseService = require("./CourseService");
const SubjectService = require("./SubjectService");

class FacultyService extends BaseService {
    findByPk(id, callback) {
        var sql = "SELECT * FROM st_faculty WHERE ID = ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Faculty(), callback);
    };

    add(faculty, callback) {
        var sql = "SELECT * FROM st_faculty WHERE EMAIL = ?";
        var params = [faculty.email];
        super.executeSQLForObject(sql, params, new Faculty(), function (err, result) {
            var collegeService = new CollegeService();
            collegeService.findByPk(faculty.collegeId, function (err, college) {
                if (err) {
                    callback(err);
                } else {
                    faculty.collegeName = college.name;
                    var courseService = new CourseService();
                    courseService.findByPk(faculty.courseId, function (err, course) {
                        if (err) {
                            callback(err);
                        } else {
                            faculty.courseName = course.courseName;
                            var subjectService = new SubjectService();
                            subjectService.findByPk(faculty.subjectId, function (err, subject) {
                                if (err) {
                                    callback(err);
                                } else {
                                    faculty.subjectName = subject.subjectName;
                                    if (result == undefined) {
                                        var sql = "INSERT INTO st_faculty(FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,MOBILE_NO,ADDRESS,GENDER,COLLEGE_ID,COLLEGE_NAME,COURSE_ID,COURSE_NAME,SUBJECT_ID,SUBJECT_NAME,DOB,CREATED_BY,CREATED_DATETIME) " +
                                            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())"
                                        var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.mobileNo, faculty.gender, faculty.collegeId, faculty.collegeName, faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob];
                                        var serv = new BaseService();


                                        console.log("params print in fculty servce ::::", params);
                                        serv.executeSQL(sql, params, function (err, result) {
                                            if (err) {
                                                callback(err);
                                            } else {
                                                callback(err, result.insertId);

                                            }

                                        })
                                    }
                                    else {
                                        callback(result);
                                    }
                                }
                            });

                        }
                    });
                }
            });
        });
    };
    update(faculty, callback) {
        var collegeService = new CollegeService();
        collegeService.findByPk(faculty.collegeId, function (err, college) {
            if (err) {
                callback(err);
            } else {
                faculty.collegeName = college.name;
                var courseService = new CourseService();
                courseService.findByPk(faculty.courseId, function (err, course) {
                    if (err) {
                        callback(err);
                    } else {
                        faculty.courseName = course.courseName;
                        var subjectService = new SubjectService();
                        subjectService.findByPk(faculty.subjectId, function (err, subject) {
                            if (err) {
                                callback(err);
                            } else {
                                faculty.subjectName = subject.subjectName;
                                var sql = "UPDATE st_faculty SET FIRST_NAME=?,LAST_NAME=?,EMAIL=?,MOBILE_NO=?,GENDER=?,COLLEGE_ID=?,COLLEGE_NAME=?,COURSE_ID=?,COURSE_NAME=?,SUBJECT_ID=?,SUBJECT_NAME=?,DOB=? WHERE ID = ? "
                                var params = [faculty.firstName, faculty.lastName, faculty.email, faculty.mobileNo, faculty.gender, faculty.collegeId, faculty.collegeName, faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.id];
                                var serv = new BaseService();
                                serv.executeSQL(sql, params, function (err, result) {
                                    if (err) {
                                        callback(err);
                                    } else {
                                        callback(err, result.insertId);

                                    }

                                })
                            }
                        });

                    }
                });
            }
        });
    }

    search(faculty, pageNo, pageSize, callback) {
        var sql = "SELECT * FROM st_faculty WHERE 1=1 ";
        if (faculty.firstName) {
            sql += " AND FIRST_NAME LIKE '" + faculty.firstName + "%' ";
        }
        if (faculty.courseId) {
            sql += " AND COURSE_ID =" + faculty.courseId;
        }
        if (faculty.collegeId) {
            sql += " AND COLLEGE_ID =" + faculty.collegeId;
        }
        if (faculty.subjectId) {
            sql += " AND SUBJECT_ID =" + faculty.subjectId;
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new Faculty(), callback);

    }
}

module.exports = FacultyService;