const BaseBean = require("./BaseBean");

class Subject extends BaseBean {
    constructor() {
        super();
        this.subjectName = '';
        this.subjectDescription = '';
        this.courseId = '';
        this.courseName = '';
        this.key = '';
        this.value = '';
    }

    populateResult(res) {
        //   super.populateResult(res);
        this.id = res.ID;
        this.subjectName = res.SUBJECT_NAME;
        this.subjectDescription = res.SUBJECT_DESCRIPTION;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
        this.key = this.id;
        this.value = this.subjectName;
        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDateTime = res.CREATED_DATETIME;
        this.modifiedDateTime = res.MODIFIED_DATETIME;
    }
    populateRequest(body) {
        //   super.populateRequest(body);
        if (body.id) {


            this.id = body.id

        }

        if (body.subjectName) {
            this.subjectName = body.subjectName.trim();
        }
        if (body.subjectDescription) {
            this.subjectDescription = body.subjectDescription.trim();
        }
        if (body.courseId) {
            this.courseId = body.courseId;
        }
        if (body.courseName) {
            this.courseName = body.courseName;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }

}

module.exports = Subject;