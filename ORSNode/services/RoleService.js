const Role = require("../bean/Role");
const BaseService = require("./BaseService");

class RoleService extends BaseService {
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_role WHERE ID= ?"
        var param = [id];
        super.executeSQLForObject(sql, param, new Role(), callback)
    }
    search(role, pageNo, pageSize, callback, ctx) {
        console.log("i am in search Role Service ");
        var sql = "SELECT * FROM st_role where 1=1";
        if (role.name) {
            sql += " and NAME like '" + role.name + "%'";
        }
        if (role.description) {
            sql += " and DESCRIPTION like '" + role.description + "%'";
        }
        super.executeSQLForList(sql, { "pageNo": pageNo, "pageSize": pageSize }, new Role(), function (err, result) {

            if (err) {


                callback(err)
            } else {
                console.log("print result ::::", result.list[0]);

                callback(err, result);


            }

        });
    }

    add(role, callback) {
        var sqlt = "SELECT * FROM ST_ROLE WHERE NAME = ?";
        var paramst = [role.name];
        super.executeSQLForObject(sqlt, paramst, new Role(), function (err, role) {
            
            if (role == undefined) {
                var sql = "INSERT INTO ST_ROLE  (NAME, DESCRIPTION) VALUES (?,?)"
                var param = [role.name, role.description];
                console.log("param print Role serrvice in add:::", param);

                var baseservice = new BaseService();
                baseservice.executeSQL(sql, param, function (err, result) {
                    if (err) {
                        callback(err)
                    }
                    else {
                        callback(err, result.insertID)
                    }
                })

            } else {
                var result = {};
                result.inputerror = {};
                result.inputerror.name = "";
                result.data = role;
                result.inputerror.role = "This role name is taken"
                callback(result, err);
            }

        })




    }

    update(role, callback, ctx) {
        var sql = "UPDATE st_role SET NAME= ?, DESCRIPTION=? WHERE ID =?"
        var param = [role.name, role.description, role.id];
        super.executeSQL(sql, param, function (err, result) {
            if (err) {

                callback(err)

            }
            else {
                callback(err, result.affectedRows);
            }
        })
    }

    delete(id, callback, ctx) {

        super.delete(id, 'st_role', callback, ctx);



    }


}
module.exports = RoleService

