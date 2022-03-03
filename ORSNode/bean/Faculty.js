const DataUtility = require("../utility/DataUtility");
const BaseBean = require("./BaseBean");

class Faculty extends BaseBean {
    constructor() {
        super();
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        //this.password = '';
        this.mobileNo = '';
        this.address = '';
        this.gender = '';
        this.collegeId = '';
        this.collegeName = '';
        this.subjectId ='';
        this.subjectName = '';
        this.courseId = '';
        this.courseName = '';
        this.dob = '';
    //    this.key = '';
      //  this.value = '';

    }
    populateResult(res) {

        super.populateResult(res);
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.email = res.EMAIL;
        //this.password = res.PASSWORD;
        this.mobileNo = res.MOBILE_NO;
        this.address = res.ADDRESS;
        this.gender = res.GENDER;
        this.collegeId = res.COLLEGE_ID;
        this.collegeName = res.COLLEGE_NAME;
        this.subjectId = res.SUBJECT_ID;
        this.subjectName = res.SUBJECT_NAME;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
        this.dob = DataUtility.formatDate(res.DOB);
        
    }

    populateRequest(body) {
        super.populateRequest(body);
        if (body.firstName) {
            this.firstName = body.firstName.trim();
        }
        if (body.lastName) {
            this.lastName = body.lastName.trim();
        }
        if (body.email) {
            this.email = body.email.trim();
        }
        /* if(body.password){
             this.password = body.password.trim() ;
         }*/
        if (body.mobileNo) {
            this.mobileNo = body.mobileNo.trim();
        }
        if (body.address) {
            this.address = body.address.trim();
        }
        if (body.gender) {
            this.gender = body.gender;
        }
        if (body.collegeId) {
            this.collegeId = body.collegeId;
        }
        if (body.collegeName) {
            this.collegeName = body.collegeName;
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
        if (body.dob) {
            this.dob = body.dob;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
        if (body.size) {
            this.size = body.size;
        }
    }
}
module.exports = Faculty;