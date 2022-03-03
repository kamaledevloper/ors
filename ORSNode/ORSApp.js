var express = require('express');
var router = require('./appRouter');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var app = express();

//var cookieParser = require('cookie-parser')

app.use(bodyParser.json());//parse json data from request


app.use(bodyParser.urlencoded({ extended: true })); //parse request parameters 



app.use(session(
    {
        secret: 'user',
        saveUninitialized: false,
        resave: false,
        cookie: { secure: false, httpOnly: false }
    }
))


// env = 'dev';
//var env = 'prod';
//if (env == 'dev') {
//}
/*
if (env == 'prod') {
    app.use(cors({
        origin: [
            "http://localhost:8081/ORSui",

        ], credentials: true
    }));
}*/

//Allow cross-origin resource sharing (CORS)

/*
app.use(function (req, res, next) {
   // res.header("Access-Control-Allow-Origin", 'http://localhost:8081'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


app.use(function (req, res, next) {
    console.log(",nbjkdsdhgis" + req.body);
    console.log("URL:::::" + req.url + "--------------------------------------------");
    console.log('2')
    res.header("SunilOS", "Rays");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
})
*/


app.use(cors({
    origin: [
        "http://localhost:4200","http://localhost:8081"
    ], credentials: true
}));


app.use('/ORS/',express.static('ORS'));
app.use('/Auth', require('./authRouter'));
app.use('/', require('./appRouter'));

var listener = app.listen(8081, 'localhost', () => {
    var host = listener.address().address;
    var port = listener.address().port;
    console.log('listening to http::::://   ' + host + ':  ' + port);
});