var mysql = require('mysql');

var system = require('../resurce/system');


var pool = mysql.createPool({

    host: system.database.host,
    user: system.database.user,
    password: system.database.password,
    port: system.database.port,

    database: system.database.database,
    debug: false,
})

module.exports = pool;