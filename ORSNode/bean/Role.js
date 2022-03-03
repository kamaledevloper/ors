const BaseBean = require("./BaseBean");

class Role extends BaseBean {
    constructor() {
        super();
        this.name = '';
        this.description = '';
    }
    populateResult(res) {

        console.log("populate result at role.js", res.body);
        this.id = res.ID;
        this.name = res.NAME;
        this.description = res.DESCRIPTION;
        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDateTime = res.CREATED_DATETIME;
        this.modifiedDateTime = res.MODIFIED_DATETIME;
    }
    populateRequest(body) {
        //   super.populateRequest(body);
        if (body.id) {
            this.id = body.id;
        } if (body.name) {
            this.name = body.name;
        }
        if (body.description) {
            this.description = body.description;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    }
}

module.exports = Role;