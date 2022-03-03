var Response = require("../bean/Response");
var ServiceLocator = require("../services/ServiceLocator");
const BaseCtl = require("./BaseCtl");
var fs = require("fs");
var User = require("../bean/User");
var formidable = require("formidable");

const EmailBuilder = require("../utility/EmailBuilder");
const EmailService = require("../utility/EmailService");
const DataValidator = require("../utility/DataValidator");
const session = require("express-session");
const { Console } = require("console");
const { json } = require("express");
const UserService = require("../services/UserService");

class UserCtl extends BaseCtl {
  constructor() {
    super();
    console.log("i am from User Ctl ");
    this.service = ServiceLocator.getUserService();
  }
  // over ridded from base CTL
  getService() {
    console.log("HEllo From User Ctl get Service");
    // returning this :- this.service = ServiceLocator.getUserService(); to calling mathod
    return this.service;
  }
  getBean(request) {
    console.log(`i am from get bean User CTL ` + request);
    var user = new User();
    //   console.log("body print" + request.body.firstName);
    user.populateRequest(request.body);

    console.log("User f name Print", user.dob);
    return user;
  }

  preload(request, response) {
    console.log("i am in preload User CTL ");
    var roleService = ServiceLocator.getRoleService();
    roleService.search("", null, null, function (err, result) {
      var res = new Response(err, result);
      response.json(res);
    });
  }

  profilePic(request, response) {
    console.log("i am in profile pic ");
    var form = new formidable.IncomingForm();
    var self = this;
    form.parse(request, function (err, params, file) {
      console.log("id", request.params.id);
      console.log("file::::", file);
      var pic = {
        id: request.params.id,
        data: fs.readFileSync(file.pic.filepath),
        type: file.pic.mimetype,
        name: file.pic.originalFilename,
      };
      console.log("pik details ::::", pic);
      self.service.updatePicture(pic, function (err, result) {
        var r = new Response(err, result);
        console.log(err);
        response.json(r);
      });
    });
  }
  /* incomplite 
    myProfile(req, res) {

        var service = this.getService();

        var id = req.session.user.id;
    }
 */
  forgotPassword(request, response) {
    console.log("i am in forgate password");
    var pass = true;
    var result = {};
    result.inputerror = {};
    result.data = null;
    var body = request.body;

    if (!request.body.login) {
      console.log("1: Kya me wahi hu jaha mujhe hona chahiye");
      result.inputerror.login = "register ID is required";

      pass = false;
    }
    if (!pass) {
      console.log("Kya me wahi hu jaha mujhe hona chahiye");
      result.data = {};
      result.data.login = request.body.login;
      result.data.password = request.body.password;
      result.msg = "";
      var res = new Response(result);
      response.json(res);
    } else {
      this.service.findByLogin(request.body.login, function (err, user) {
        if (!err) {
          console.log("I error aai he :::....");
          var m = {
            login: user.login,
            password: user.password,
            firstname: user.firstName,
            lastname: user.lastname,
          };

          var msg = EmailBuilder.getForgetPasswordMessage(m);

          msg.to = user.login;

          var ser = new EmailService();

          ser.sendEmail(msg, function (err, result) {
            if (err) {
              var r = new Response(err, result);
              response.json(r);
            } else {
              var r = new Response(
                err,
                "Password has been sent to your registred email id"
              );

              response.json(r);
            }
          });
        }
      });
    }
  }
  login(request, response) {
    console.log("i am in login ");
    var pass = true;
    var result = {};
    result.inputerror = {};
    result.data = null;
    var body = request.body;

    console.log("<------<>------>", body);

    if (!body.login) {
      result.inputerror.login = "Login Id Is Required";
      pass = false;
    } else if (!DataValidator.isEmail(body.login)) {
      result.inputerror.login = "Login Id Invalid";
      pass = false;
    }
    if (!body.password) {
      result.inputerror.password = "Password Is Required";
      pass = false;
    }
    /* else if (!DataValidator.isPassword(body.password)) {


            //    console.log("i am in else if ");
            result.inputerror.password = "password is invalid"
            pass = false;
        }
*/ if (!pass) {
      result.data = {};
      result.data.login = request.body.login;
      result.data.password = request.body.password;
      result.msg = "";
      var res = new Response(result);
      response.json(res);
    } else {
      var user = new User();
      user.populateRequest(request.body);

      this.service.authenticate(user, function (err, bean) {
        if (bean) {
          console.log("i am in if bean ");
          request.session.user = bean;

          console.log("Session print ", request.session.user);
          var result = {};
          result.data = bean;
          var res = new Response(err, result);
          response.json(res);
        }
        if (err) {
          console.log("i am in error ");
          var result = {};
          result.data = body;
          result.msg = "LoginId and Password is incorrect";
          var res = new Response(result);
          response.json(res);
        }
      });
    }
    // response.json(result);
  }

  /*save(req, res) {
        console.log("i am in save User CTL ");
        var service = this.getService();
        var bean = this.getBean(req);
    
        this.validate(req.body, function (pass, data) {
    
            if (pass) {
    
    
    
                if (bean.id && bean.id > 0) {
    
                    /*
                    if (bean.id == req.session.user.id) {
                        console.log("Session check ")
                        req.session.user = bean;
                    }
                    bean.modifiedBy = req.session.user.login;
                   
                   */
  /*
                        service.update(bean, function (err, result1) {
                            console.log("beand ki value " + bean.id)
     
     
                            var result = new Response(err, result1);
                            res.json(result);
                        });
                    }
                    else {
                        //  bean.createdBy = req.session.user.login;
                        service.add(bean, function (err, pk) {
                            var result = new Response(err, pk);
                            res.json(result);
                        });
     
                    }
     
                } else {
                    console.log("pass check in else condition validation", pass)
                    //   data.data = bean;
     
                    console.log("Data print", data);
     
                    var result = new Response(data);
     
                    res.json(data);
                    //                res.json(result);
                }
     
     
            })
     
        }*/

  validate(body, callback) {
    console.log("i am in validate User CTL ");
    var pass = true;
    var result = {};
    result.inputerror = {};
    if (!body.firstName) {
      result.inputerror.firstName = "First Name is required";
      pass = false;
    } else if (!DataValidator.isFirstName(body.firstName.trim())) {
      result.inputerror.firstName = "First Name is Invalid";
      pass = false;
    }
    if (!body.lastName) {
      result.inputerror.lastName = "Last Name is required";
      pass = false;
    } else if (!DataValidator.isName(body.lastName.trim())) {
      result.inputerror.lastName = "Last Name is Invalid";
      pass = false;
    }
    if (!body.login) {
      result.inputerror.login = "Login Id is required";
      pass = false;
    } else if (!DataValidator.isEmail(body.login)) {
      result.inputerror.login = "Login Id is invalid";
      pass = false;
    }
    if (!body.password) {
      result.inputerror.password = "Password is required";
      pass = false;
    } /*else if (!DataValidator.isPassword(body.password.trim())) {
            result.inputerror.password = "Password is Invalid"
            pass = false;
        }*/
    if (!body.dob) {
      result.inputerror.dob = "DOB is required";
      pass = false;
    }
    if (!body.mobileNo) {
      result.inputerror.mobileNo = "Mobile No is required";
      pass = false;
    } else if (body.mobileNo.trim().length != 10) {
      result.inputerror.mobileNo = "Mobile No is invalid";
      pass = false;
    } else if (!DataValidator.isMobileNo(body.mobileNo.trim())) {
      result.inputerror.mobileNo = "Mobile No is invalid";
      pass = false;
    }
    if (!body.roleId) {
      result.inputerror.roleId = "Role is required";
      pass = false;
    }
    if (!body.gender) {
      result.inputerror.gender = "Gender is required";
      pass = false;
    }
    if (pass == false) {
      console.log("returning data and pass ");
      callback(pass, result);
    } else {
      callback(pass);
    }

    console.log("final pass is :::  ", pass);
  }

  register(request, response) {
    var bean = this.getBean(request);
    bean.roleId = 2;
    console.log("I am in User Registor", bean);
    //response.json(bean)
    console.log("body body", request.body);

    this.validate(bean, function (pass, data) {
      console.log("print pass value:", pass);
      console.log("print data value:", data);
      console.log("password print ", request.body.password);
      if (!request.body.password) {
        data.inputerror.confirmPassword = "Confirm Password is required";
        data.data = request.body;
        var result = new Response(data);
        response.json(result);
      } else if (request.body.confirmPassword == request.body.password) {
        console.log("i am in esle if condition");
        if (pass) {
          console.log("pass true");
          var userservice = new UserService();
          userservice.register(bean, function (err, PK) {
            var res = new Response(err, PK);
            response.json(res);
          });
        } else {
          data.inputerror.confirmPassword = "password does not match";
          data.data = request.body;
          var result = new Response(data);
          response.json(result);
        }
      }
    });
  }
  myProfile(request, response) {
    var service = this.getService();

    let session = request.session.user;
    
    let id = session.id;
   
    //let id = '5';
   
    
    console.log("session exp ", session);
    service.findByPk(id, function (err, bean) {
      var result = new Response(err, bean);
      response.json(result);
    });
  }

  logout(request, response) {
    request.session.destroy(function (err) {
      if (!err) {
        response.json(new Response(null, "Logout sucess"));
      }
    });
  }

  menu(request, response) {
    var bar = [];
    if (request.session.user) {
      bar = [
        (this.user = [
          { text: "User", link: "user" },

          { text: "User List", link: "userlist" },
        ]),

        (this.Role = [
          { text: "Role", link: "role" },
          { text: "Role List", link: "rolelist" },
        ]),
        (this.College = [
          { text: "College", link: "college" },
          { text: "College List", link: "collegelist" },
        ]),
        (this.Student = [
          { text: "Student", link: "student" },
          { text: "Student List", link: "studentlist" },
        ]),
        (this.Marksheet = [
          { text: "Marksheet", link: "marksheet" },
          { text: "Marksheet List", link: "marksheetlist" },
          { text: "Merit List", link: "meritlist" },
          { text: "Get Marksheet", link: "getmarksheet" },
        ]),
        (this.Course = [
          { text: "Course", link: "course" },
          { text: "Course", link: "course" },
        ]),
        (this.Subject = [
          { text: "Subject", link: "subject" },
          { text: "SUbject List", link: "subjectlist" },
        ]),
        (this.TimeTable = [
          { text: "TimeTable", link: "timetable" },
          { text: "TimeTable", link: "timetable" },
        ]),
        (this.Facult = [
          { text: "Faculty", link: "faculty" },
          { text: "Faculty", link: "faculty" },
        ]),
      ];
    } else {
      bar = [{ text: "Login", link: "login" }];
    }
    var res = new Response(null, bar);
    response.json(res);
  }

  getPic(request, response) {
    var id = request.params.id;
    this.service.getPicture(id, function (err, pic) {
      if (err) {
        var rootpath = {
          root: ".",
        };
        response.sendFile("unknown.png", rootpath);
      } else {
        response.writeHead(200, { "content-Type": pic.type });
        //  response.write(pic);
        response.write(pic.data);
        response.end();
      }
    });
  }
}

module.exports = UserCtl;
