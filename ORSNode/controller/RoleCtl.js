const Role = require("../bean/Role");
const ServiceLocator = require("../services/ServiceLocator");


const DataValidator = require("../utility/DataValidator");
const BaseCtl = require("./BaseCtl");

class RoleCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getRoleService();
    }
    getBean(request) {
        console.log("i am in RoleCtl get Bean", request.body)
        var role = new Role();
        role.populateRequest(request.body);


        console.log("role bean print", role);
        return role;
    }
    getService() {
        return this.service
    }

    //    search() { }

    validate(body, callback) {

        console.log("Validate working in role ctl ")
        var pass = true;
        var result = {};
        result.inputerror = {};
        if (!body.name) {
            result.inputerror.name = "Role Name is required";
            pass = false;
        } else if (!DataValidator.isName(body.name)) {
            result.inputerror.name = "Role Name is Invalid";
            pass = false;
        }
        if (!body.description) {
            result.inputerror.description = "Role description is required";
            pass = false;
        }
        if (pass == false) {
            callback(pass, result)
        } else {
            callback(pass)
        }
    }

}
module.exports = RoleCtl;