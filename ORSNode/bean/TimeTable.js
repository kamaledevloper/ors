const DataUtility = require("../utility/DataUtility");
const BaseBean = require("./BaseBean");

class TimeTable extends BaseBean {


    constructor() {
        super()
        this.examTime = '';
        this.examDate = '';
        this.subjectId = '';
        this.subjectName = '';
        this.courseId = '';
        this.courseName = '';
        this.semester = '';
    }


    populateResult(res) {
        super.populateResult(res);
        this.examTime = res.ExamTime;
        this.examDate = DataUtility.formatDate(res.ExamDate);
        this.subjectId = res.SubjectId;
        this.subjectName = res.subjectName;
        this.courseId = res.CourseId;
        this.courseName = res.courseName;
        this.semester = res.Semester;
    }

    populateRequest(body) {
        super.populateRequest(body);
        if (body.examTime) {
            this.examTime = body.examTime;
        }
        if (body.examDate) {
            this.examDate = body.examDate;
        }
        if (body.subjectId) {
            this.subjectId = body.subjectId;
        }
        if (body.subjectName) {
            this.subjectName = body.subjectName;
        }
        if (body.courseId) {
            this.courseId = body.courseId;
        }
        if (body.courseName) {
            this.courseName = body.courseName;
        }
        if (body.semester) {
            this.semester = body.semester;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }

}
module.exports = TimeTable;