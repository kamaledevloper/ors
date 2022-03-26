var Response = require("../bean/Response");
const User = require("../bean/User");

var DataValidator = require("../utility/DataValidator");

//const ServiceLocator = require("../services/ServiceLocator");

const ServiceLocator = require("../services/ServiceLocator");

const BaseCtl = require("./BaseCtl");

class LoginCtl extends BaseCtl {
  constructor() {
    super();

    this.service = ServiceLocator.getUserService();

    //    this.service = ServiceLocator.getUserService();
  }

  validate(body, callback) {
    console.log("i am in validate Login CTL ");
    var result = {};
    var pass = true;
    result.inputerror = {};
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

    if (pass == false) {
      console.log("returning data and pass ");
      callback(pass, result);
    } else {
      callback(pass);
    }

    console.log("final pass is :::  ", pass);
  }

  getBean(request) {
    var user = new User();

    user.populateRequest(request.body);
    return user;
  }

  login(request, response) {
    console.log(`1) i am in save base CTL`, request.body);
    var service = this.getService();
   
    var body = request.body;
   
    var bean = this.getBean(request);
    console.log("bean print in save ", bean);

    //console.log("i am in save bean value" + bean.id);

    this.validate(request.body, function (pass, result) {
      if (!pass) {
        result.data = {};
        result.data.login = request.body.login;
        result.data.password = request.body.password;
        result.msg = "";
        var res = new Response(result);
        response.json(res);
      } else {
        var user = new User();
        user.populateRequest(request.body);

        service.authenticate(user, function (err, bean) {
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

        // response.json(result);
      }
    });
  }

  getService() {
    console.log("i am at Get Service ");
    return this.service;
  }
}

module.exports = LoginCtl;
