const College = require("../bean/College");
const BaseService = require("./BaseService");

class CollegeService extends BaseService {

    findByPk(id, callback, ctx) {
        console.log("i am at find by PK ")
        var sql = "SELECT * from st_college WHERE ID=?"
        var params = [id];
        console.log("i am in Find by Pk College Service   " + sql + "params" + params[0])
        super.executeSQLForObject(sql, params, new College(), callback)
    }

    
    search(college, pageNo, pageSize, callback,) {
        console.log("i am in college search college service pageNo _____pageSize   " + pageNo + "   " + pageSize);


        var sql = "SELECT * FROM st_college WHERE 1=1 "
        if (college.name) {
            sql += " AND NAME LIKE '" + college.name + "%' ";
        }
        if (college.address) {
            sql += " AND ADDRESS LIKE '" + college.address + "%' ";
        }
        if (college.phoneNo) {
            sql += " AND PHONE_NO LIKE '" + college.phoneNo + "%' ";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new College(), callback);
    }
    add(college, callback,) {
        console.log("i am in add college service ");
        var sqlt = "SELECT * FROM ST_COLLEGE WHERE NAME =?"
        var paramst = [college.name];

        super.executeSQLForObject(sqlt, paramst, new College(), function (err, result) {

            if (result == undefined) {
                var sql = "INSERT INTO st_college (CREATED_DATETIME,MODIFIED_DATETIME,NAME,ADDRESS,STATE,CITY,PHONE_NO) "
                    + " VALUES (NOW(),NOW(),?,?,?,?,?)";

                var params = [college.name, college.address, college.state,
                college.city, college.phoneNo];
                var baseservice = new BaseService();
                baseservice.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.insertID);
                    }
                });
            } else {


                var result = {};
                result.inputerror = {};
                result.inputerror.login = "";
                result.data = college;
                result.inputerror.college = "This College name already taken"
                callback(result, err);

            }
        })
    }
    delete(id, callback) {

        super.delete(id, "st_college", callback)
    }
    update(college, callback) {
        var sql = "UPDATE st_college SET NAME=?,ADDRESS=?,CITY=?,STATE=?,PHONE_NO=?,MODIFIED_BY=?,MODIFIED_DATETIME=NOW() WHERE ID=?";
        var params = [college.name, college.address, college.city, college.state, college.phoneNo, college.modifiedBy, college.id]
        super.executeSQL(sql, params, function (err, result) {

            if (err) {

                callback(err);
            } else {
                callback(err, result.affectedRows);
            }
        })
    }
}

module.exports = CollegeService;