const BaseService = require("./BaseService");
const User = require("../bean/User")
const ServiceLocator = require("./ServiceLocator");
const EmailBuilder = require("../utility/EmailBuilder");

const EmailService = require("../utility/EmailService");
const { response } = require("express");
const RoleService = require("./RoleService");

class UserService extends BaseService {
    preload(resqest, response) {
        var rService = ServiceLocator.getRoleService(); //taking abject of UserService();
        rService.search('', null, function (err, result) {

            response.json(resqest.list)

        })
    }

    findByPk(id, callback, ctx) {
        console.log("in find by pk User Service ");
        var sql = "SELECT * FROM ST_USER WHERE ID =?";
        var param = [id];
        super.executeSQLForObject(sql, param, new User(), function (err, bean) {
            callback(err, bean)

        });
    };
    findByLogin(login, callback, ctx) {

        var sql = "SELECT * FROM ST_USER WHERE LOGIN =?";

        var param = [login];

        super.executeSQLForObject(sql, param, new User(), function (err, bean) {
            callback(err, bean);
        });
    };
    authenticate(user, callback, ctx) {
        console.log("user athenticate");
        var sql = "SELECT * FROM ST_USER WHERE LOGIN =? AND PASSWORD = ?";
        var params = [user.login, user.password];

        super.executeSQLForObject(sql, params, new User(), function (err, bean) {
            if (err) {
                callback("Invalide ID / Password");
            } else {
                callback(err, bean);
            }
        });
    }
    register(user, callback) {
        console.log("register calling ");
        this.add(user, function (err, PK) {
            if (err) {
                callback(err)
            }
            else {
                var map = {
                    login: user.login,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
                var msg = EmailBuilder.getSignUpMessage(map);
                msg.to = user.login;
                var ser = new EmailService();
                ser.sendEmail(msg, function (err, result) {
                    if (err) {
                        callback(err)
                    }
                    else {
                        callback(err, result)
                    }
                });
            }

            /*
            if (PK) {
                console.log("i am in else condition user service register");
                callback( PK);
            }*/
        })


    }
    search(user, pageNo, pageSize, callback) {
        console.log("i am in search user service");
        var sql = 'SELECT * FROM ST_USER WHERE 1=1'

        if (user.roleId) {
            sql += " and ROLE_ID = '" + user.roleId + "'";
        }

        if (user.firstName) {
            sql += " and FIRST_NAME = '" + user.firstName + "'";
        } if (user.lastName) {
            sql += " and LAST_NAME = '" + user.lastName + "'";
        }
        if (user.login) {
            sql += " and LOGIN = '" + user.login + "'";
        }
        if (user.mobileNo) {
            sql += " and MOBILE_NO = '" + user.mobileNo + "'";
        }
        if (user.dob) {
            sql += " and DOB = '" + user.dob + "'";
        }
        super.executeSQLForList(sql, { pageNo: pageNo, pageSize: pageSize }, new User(), callback)
    }
    update(user, callback) {

        console.log("i am in passs under update if ");

        var sql = "UPDATE st_User SET FIRST_NAME= ?,LAST_NAME=?,LOGIN=?,PASSWORD=?,DOB=?,MOBILE_NO=?,ROLE_ID =?,GENDER=? WHERE ID =?";

        console.log("sql print update new service " + sql);

        var param = [user.firstName, User.lastName, User.login, User.password, User.dob, User.mobileNo, User.roleId, user.gender, user.id]

        super.executeSQL(sql, param, function (err, result) {


            if (err) {
                callback(err);
            } else {
                callback(err, result.affectedRows);
            }


        });

    }
    add(user, callback, ctx) {
        console.log(`i am in add User Service `);
        var sql = "SELECT * FROM st_user WHERE LOGIN = ? ";
        var params = [user.login];
        super.executeSQLForObject(sql, params, new User(), function (err, data) {
            if (data == undefined) {
                var roleService = new RoleService();
                roleService.findByPk(user.roleId, function (err, data) {
                    if (err) {
                        callback(err)
                    } else {
                        console.log("User details i am at add mathod after all check done " + user.dob);
                        var sql = "INSERT INTO st_user (FIRST_NAME,LAST_NAME,LOGIN,PASSWORD,DOB,MOBILE_NO,ROLE_ID,GENDER) VALUES(?,?,?,?,?,?,?,?) "
                        var params = [user.firstName, user.lastName, user.login,
                        user.password, user.dob, user.mobileNo, user.roleId, user.gender];
                        var baseservice = new BaseService();
                        baseservice.executeSQL(sql, params, function (err, result) {
                            console.log(" in<>>><<<<>>super.executeSQL(sql, params, function (err, result)")
                            if (err) {
                                console.log(err);
                                console.log("in error")
                                callback(err);
                            } else {
                                var pk = result.insertId;
                                console.log("PK is " + pk);
                                callback(err, pk);
                            }
                        })
                    }
                })
            } else {
                var result = {};
                result.inputerror = {};
                result.inputerror.login = "";
                result.data = user;
                result.inputerror.login = "This login Id is taken"
                callback(result, err);
            }

        })
    }
    update(user, callback, ctx) {
        var sql = "UPDATE st_user SET  FIRST_NAME=?,LAST_NAME=?,LOGIN=?,PASSWORD=?,DOB=?,MOBILE_NO=?,ROLE_ID=?,GENDER=? WHERE ID=?"
        var params = [user.firstName, user.lastName, user.login,
        user.password, user.dob, user.mobileNo, user.roleId, user.gender, user.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, user.id);
            }
        });
    }
    delete(id, callback, ctx) {
        super.delete(id, 'st_user', callback, ctx);
    }
    updatePicture(pic, callback, ctx) {

        console.log("i am in Update picture ");
        var sql = "UPDATE st_user SET PIC_NAME=?, PIC_TYPE =?, PIC = ? WHERE ID=?"


        var params = [pic.name, pic.type, pic.data, pic.id];

        console.log("params print in UserService:::",params);
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                console.log("chal ke nahi " + result.affectedRows)
                callback(err, result.affectedRows);
            }
        });
    }
    getPicture(id, callback, ctx) {
        var sql = "SELECT PIC_NAME, PIC_TYPE, PIC FROM st_user WHERE ID=?";
        var params = [id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                console.log("Result print :::", result);
                //Check if record is found and name of picture is not null
             
             
             console.log("Result[0] ",result[0]);
                if (result[0] && result[0].PIC_NAME) {
                    var pic = {
                        "id": id,
                        "picName": result[0].PIC_NAME,
                        "type": result[0].PIC_TYPE,
                        "data": result[0].PIC
                    }
                    callback(err, pic);
                } else {
                    callback('No picture');
                }
            }
        });
    }

    /**
     * Change user password
     * 
     * @param {*} user 
     * @param {*} callback 
     * @param {*} ctx 
     */
    changePassword(form, callback, ctx) {
        var self = this;
        self.findByPk(form.id, function (err, user) {
            if (form.oldPassword == user.password) {
                var sql = "UPDATE st_user SET PASSWORD=? WHERE id=?";
                var params = [form.password, form.id];
                self.executeSQL(sql, params, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(err, result.affectedRows);
                        //Send email
                        var m = {
                            login: user.login,
                            password: form.password,
                            firstName: user.firstName,
                            lastName: user.lastName
                        };

                        var msg = EmailBuilder.getChangePasswordMessage(m);
                        msg.to = user.login;

                        var ser = new EmailService()
                        ser.sendEmail(msg, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                });
            } else {
                callback("Current password does not match");
            }
        });
    }

}
module.exports = UserService;