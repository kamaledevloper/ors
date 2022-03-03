const Response = require('../bean/Response');
class BaseCtl {
    constructor() {
        console.log("i am from Base Ctl ");
    }
    validate(request) {
        return true;
    }
    get(req, res) {
        // res.send("<h1> hello i am from Base Ctl <h1>");
        console.log("i am in Base ctl Get mathod");
        var service = this.getService();// getting object of  UserService();

        var id = req.params.id;

        service.findByPk(id, function (err, bean) {
            var r = new Response(err, bean);

            res.json(r);
        });
    }
    save(req, res) {
        console.log(`1) i am in save base CTL`, req.body);
        var service = this.getService();
        var bean = this.getBean(req);
        console.log("bean print in save ", bean);
        console.log("i am in save bean value" + bean.id);

        this.validate(req.body, function (pass, data) {
            if (pass) {
                console.log("validate call base ctl ");
                if (bean.id && bean.id > 0) {
                    console.log(`i am in bean.id > 0 condition `, bean.id);
                    service.update(bean, function (err, count) {
                        var r = new Response(err, count);
                        res.json(r);
                    });
                } else {
                    console.log(`2) i am in add condition`);
                    //call add mathod of User Service 
                    service.add(bean, function (err, pk) {
                        console.log(">---<", bean)
                        var r = new Response(err, pk)
                        console.log("i am in add mathod");
                        res.json(r);
                    })
                }
            } else {

                console.log("base Ctl else workking :::");

                data.data = bean;
                var result = new Response(data);
                res.json(result);
            }
        });

    }

    getService() {

        return null;
    }

    getBean(request) {
        //   console.log(request);
        return null;

    }
    delete(req, res) {
        var service = this.getService();
        console.log("in delete BAse Ctl ", service);
        var id = req.params.id;
        service.delete(id, function (err, bean) {
    
            var r = new Response(err, bean);
            res.json(r);
    
        });
    }
    search(req, res) {
        console.log("i an in search base ctl ");
        var service = this.getService();
        var bean = this.getBean(req);
        var pageNo = 1;
        var pageSize = 10;
        if (req.body.pageNo) {
            pageNo = req.body.pageNo;
            console.log("pageNo in if condition::" + pageNo);
        }
        if (req.body.pageSize) {
            pageSize = req.body.pageSize;
            console.log("pagesize in if condition::" + pageSize);
        }
        var result = {};
        service.search(bean, pageNo, pageSize, function (err, result) {
            if (err) {
                var resa = new Response(err);
                res.json(resa);
                return;
            }
            result.pageNo = pageNo;
            result.pageSize = pageSize;
            result.searchParams = bean;
            var resp = new Response(err, result);
            res.json(resp);
        })
    }
}

module.exports = BaseCtl;