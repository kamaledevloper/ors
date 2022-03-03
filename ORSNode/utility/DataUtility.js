const { json } = require("express");
const parse = require("nodemon/lib/cli/parse");

class DataUtility {

    static formatDate(d) {
        //    console.log("hi i am in Data Utility ", d);
        var str = JSON.stringify(d);

        console.log('MySQLDate:', str);
        if (d) {

            try {


                return d.toISOString().split('T')[0];

            } catch (err) {

                return '';
            }


        } else {



            return d
        }


    }


    static parseInt(val) {
        //    console.log("hi i am in Data Utility ", d);
        var str = parseInt(val);
        return str;

    }


}

module.exports = DataUtility