
var BaseBean = require("../bean/BaseBean");
var DataUtility = require("../utility/DataUtility")
class User extends BaseBean {

    constructor() {
        super();
        this.firstName = '';
        this.lastName = '';
        this.login = '';
        this.password = '';
        this.dob = '';
        this.mobileNo = '';
        this.roleId = '';
        this.gender = '';
      
        this.picName=''
    };

    populateResult(res) {

        console.log("------------<>-------------", res)

        console.log(`i am in populate result `);

        // res is abject of array result at index 0

        this.id = res.ID;
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.login = res.LOGIN;
        this.picName = res.PIC_NAME;
        this.password = res.PASSWORD;
        this.dob = DataUtility.formatDate(res.DOB);
        this.mobileNo = res.MOBILE_NO;
        this.roleId = res.ROLE_ID;
        
    //    this.roleName = res.ROLE_ID;
        
        this.gender = res.GENDER;
        this.image = res.IMAGE;
        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDateTime = res.CREATED_DATETIME;
        this.modifiedDateTime = res.MODIFIED_DATETIME;
    }

    populateRequest(body) {


        console.log("ID print" + body.id)

        if (body.id) {
            this.id = body.id;
        }
        if (body.firstName) {
            this.firstName = body.firstName;
        }
        if (body.lastName) {
            this.lastName = body.lastName;
        }
        if (body.login) {
            this.login = body.login;
        }
        if (body.password) {
            this.password = body.password;
        }
        if (body.dob) {
            this.dob = body.dob;
        }
        if (body.mobileNo) {
            this.mobileNo = body.mobileNo;
        }

        if (body.roleId) {
            this.roleId = body.roleId;
        }
        if (body.gender) {
            this.gender = body.gender;
        }
        if (body.image) {
            this.image = body.image;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };

}


module.exports = User;