
var express = require('express');
const UserCtl = require('./controller/UserCtl');
var loginRouter = express.Router();

/*
loginRouter.post('/', function (request, response) {

    console.log("in auth kuch bolo bhayya ")
    console.log("i am in authrouter part / only");
    var ctl = new UserCtl();
    ctl.login(request, response);


});



*/


loginRouter.post('/login', function (request, response) {

    console.log("in login post ")
    console.log("i am in authrouter part");
    var ctl = new UserCtl();
    ctl.login(request, response);


});




loginRouter.get('/logout', function (request, response) {
    console.log("--------------------------------------------llogout=----------------------------")
    var ctl = new UserCtl();
    ctl.logout(request, response);
});
loginRouter.post('/register', function (request, responce) {
    var ctl = new UserCtl();
    ctl.register(request, responce);
})
loginRouter.post('/forgotpassword', function (request, responce) {
    var ctl = new UserCtl();
    ctl.forgotPassword(request, responce);
})

module.exports = loginRouter;