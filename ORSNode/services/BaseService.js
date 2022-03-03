const pool = require("./MySqlPool");

class BaseService {

    executeSQL(sql, params, callback) {

        console.log(`i am in execute SQl BAse Service `);

        pool.getConnection(function (error, connection) {
            console.log("i an in getconnection Base Service  SQL is " + sql);
            if (error) {
                console.log("i am in error ");
                console.log(error)
                //console.error(error);
                return;
            }
            connection.query(sql, params, function (error, results) {
                console.log("params print :::::", params)
                console.log(`in connection query BAse Service`);
                //    console.log("print data ", results);
                console.log("sql " + sql);
                // console.log(params)

                console.log("result kya aaya he  ", results);
                callback(error, results)


                /*
                                {
                                    if (error) {
                                        console.log("Error aai he ");
                                    }
                                    console.log(results);
                                };*/
                connection.release();
            });
        })
    }
    executeSQLForObject(sql, params, bean, callback) {

        console.log(" executeSQLForObject::: params print ::::::-))))", params)
        this.executeSQL(sql, params, function (err, result) {

            console.log('executeSQLForObject', err, result);
            if (err) {
                callback(err);
            } else if (result.length > 0) {
                console.log('------------->')
                //  console.log(`result is ${result[0]}`);
                // result have array any we are passing index 0 which have object {}
                console.log("print result", result[0].LOGIN);
                bean.populateResult(result[0]);
                callback(err, bean);
                console.log("bean value print ", bean)
            } else {
                console.log('--------->2');
                callback('record not found');

            }
        });
    }
    executeSQLForList(sql, params, beanObj, callback) {
        console.log("i am in Excure Sql For List", sql);
        console.log("Bean object coming ::::", beanObj)
        var self = this;
           
        console.log("Excute sql of list ::::",params)
        //var pageSize = 10;
        0    //Apply limit for pagination 
        var sqlWithLimit = sql;
        if (params && params.pageNo > 0) {

            console.log(" if con. Excute sql of list ::::",params.pageNo)
            var startIndex = (params.pageNo - 1) * params.pageSize;
            sqlWithLimit += " limit " + startIndex + "," + params.pageSize;
        }
        console.log('Params in executeSQLForList', params);
        console.log('Limit executeSQLForList', sqlWithLimit);
        //Count query 
        var sqlCount = "select count(*) as ct " + sql.substring(sql.toLocaleLowerCase().indexOf('from'));

        self.executeSQL(sqlWithLimit, params, function (err, result) {
            if (err) {
                callback(err);
                return;
            }
            //Create list of objects
            var list = [];

            console.log("creating for each loop for list");
            result.forEach(function (e) {
                //Create clone of bean
                var bean = Object.create(beanObj);
                bean.populateResult(e);

                //                console.log("bean print", bean);
                //populateResult(e);              
                list.push(bean);

                //  console.log("list print", list);

            });
            var sqlCount = "select count(*) as ct " + sql.substring(sql.toLocaleLowerCase().indexOf('from'));

            if (sql.includes("TOTAL")) {
                sqlCount = "select count(*) as ct from st_marksheet where 1=1 limit 0,10"
            }

            //Get count of records and add at the last of list
            self.executeSQL(sqlCount, params, function (err, result) {
                callback(err, {
                    "list": list,
                    "count": result[0].ct
                });
            });
        });

    }

    delete(id, table, callback, ctx) {
        var sql = "DELETE FROM " + table + " where ID= ?";
        var param = [id];
        var self = this;

        this.findByPk(id, function (err, bean) {
            if (err) { callback(err) } else {

                self.executeSQL(sql, param, function (err, count) {
                    if (err) {
                        callback(err)
                    }
                    else {
                        callback(err, bean);
                    }
                })
            }
        })

    }
}
module.exports = BaseService;