var BaseBean = require('./BaseBean');
class Course extends BaseBean {
    constructor() {
        super();
        this.courseName = '';
        this.courseDescription = '';
        this.courseDuration = '';
        //    this.modifiedBy = '';
        //  this.createdBy = '';
        this.key = '';
        this.value = '';
    }
    populateResult(res) {
        console.log("populate result ");
        super.populateResult(res);

        this.id = res.ID
        this.courseName = res.Name;
        this.courseDescription = res.Description;
        this.courseDuration = res.COURSE_DURATION;
        this.key = this.id;
        this.value = this.courseName;
    }
    populateRequest(body) {
        console.log("i am in populate request course");
        // super.populateRequest(body);
        if (body.id) {
            this.id = body.id;
        }
        if (body.courseName) {
            this.courseName = body.courseName.trim();
        }
        if (body.courseDescription) {
            this.courseDescription = body.courseDescription.trim();
        }
        if (body.courseDuration) {
            this.courseDuration = body.courseDuration;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
        if (body.size) {
            this.size = body.size;
        }
    }

}
module.exports = Course;