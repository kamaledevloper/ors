var express = require("express");
var BaseCtl = require("./controller/BaseCtl");
var UserCtl = require("./controller/UserCtl");
var RoleCtl = require("./controller/RoleCtl");
var CollegeCtl = require("./controller/CollegeCtl");
var StudentCtl = require("./controller/StudentCtl");
var FacultyCtl = require("./controller/FacultyCtl");
var CourseCtl = require("./controller/CourseCtl");
var SubjectCtl = require("./controller/SubjectCtl");
var TimeTableCtl = require("./controller/TimeTableCtl");

var MarkSheetCtl = require("./controller/MarkSheetCtl");
const Response = require("./bean/Response");

var router = express.Router();

router.use(function (req, res, next) {
  // console.log("Cookie print :::" + req.cookies['connect.sid']);
  if (req.session.user) {
    next();
  } else {
    console.log("in middle ware else condition");
    var resp = new Response("NOt loggedin");
    res.json(resp);
  }
});

router.get("/:usecase/:operation/:id?", function (req, res) {
  console.log("In approuter get mathod");

  console.log("usecase: " + req.params.usecase);
  console.log("operation: " + req.params.operation);
  console.log("id: " + req.params.id);
  console.log("mathod: " + req.method);
  var op = req.params.operation;
  if (op == "save") {
    // console.log('in if condition');
    res.status(400).send("http get is not allowed");
  }
  callController(req, res, op);
});

router.post("/:usecase/:operation", function (request, response) {
  console.log("App Router POST methods");

  var op = request.params.operation;

  if ("get" == op || "preload" == op) {
    response.status(400).send("Http Post is not allowed");
    return;
  }
  console.log("body print at get mathod" + request.body);
  callController(request, response, op);
});

router.post("/:usecase/:operation/:id", function (request, response) {
  console.log("App Router POST methods for pic");

  var op = request.params.operation;

  //    var id = request.params.id;

  if ("profilePic" == op) {
    callController(request, response, op);
  } else {
    response.status(400).send("Http Post is not allowed");
    return;
  }
});
function callController(request, response, op) {
  console.log("i am in call controller");
  var usecase = request.params.usecase + "Ctl()";
  //UserCtl()
  console.log(".Usecase print", usecase);
  //UserCtl()
  var ctl = eval("new " + usecase); //create controller

  console.log("Usecase name:", usecase);
  //UserCtl()
  var exp = "ctl." + op + "(request, response)";
  console.log("exp is ", exp);
  eval(exp); //call method

  //UserCtl save mathod call

  console.log("request" + request);
}
module.exports = router;
