import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EndpointServiceService } from "./endpoint-service.service";
import { ServiceLocatorService } from "./service-locator.service";

export class BaseCtl implements OnInit {
  reset() {

    this.form.error = false;
      this.form.message = null;
      this.form.inputerror = {};
    this.form.data = { id: null, pageNo: null, pageSize: null };
    this.display();
  }

  public api = {
    endpoint: null,
    get: null,
    save: null,
    search: null,
    delete: null,
    preload: null,
  };

  initApi(ep) {
    console.log("value of ep is :::", ep);
    this.api.endpoint = ep;

    console.log("in it api :::", this.api.endpoint);
    this.api.get = ep + "/get";
    this.api.save = ep + "/save";
    this.api.search = ep + "/search";
    this.api.delete = ep + "/delete";
    this.api.preload = ep + "/preload";
    console.log("API final for preload ", this.api.preload);
  }

  public form = {
    error: true,
    message: null,
    preload: {},
    data: { id: null, pageNo: 0, pageSize: 5 },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
    pageNo: 0,
    pageSize: 0,
    count: 0,
  };

  constructor(
    public endpoint: EndpointServiceService,
    public serviceLocator: ServiceLocatorService,
    public route: ActivatedRoute
  ) {
    var _self = this;
    _self.initApi(endpoint);
    //    console.log("in constructor:::::::", _self.initApi(endpoint))
    serviceLocator.getPathVariable(route, function (params) {

      
      console.log("params print from get pathvariable :::", params["id"]);
      _self.form.data.id = params["id"];
      console.log("I GOT ID", _self.form.data.id);
    });
  }

  ngOnInit() {
    console.log("i am in base component NG OnIn it");
    console.log("cklsbfguwefyuadbpgvdbvgy::::::::::::::::" + this.form.data.id);
    this.preload();

    //this for if id in perameter
    if (this.form.data.id && this.form.data.id > 0) {
      this.display();
    }
    console.log("run");
  }

  preload() {
    console.log("i am working preload");
    var _self = this;
    this.serviceLocator.httpService.get(_self.api.preload, function (res) {
      console.log("result print ::::", res);

      if (res.sucess) {
        console.log("incoming items print :::::", res.result);

        _self.form.preload = res.result;
      } else {
        _self.form.error = false;
       _self.form.message = res.result.message;
        _self.form.message = "An Error Occured please reload";
      }
      console.log("FORM data print from preload::::", _self.form.preload);
    });
  }

  display() {
    console.log("i am in display");
    var _self = this;
    this.serviceLocator.httpService.get(
      _self.api.get + "/" + _self.form.data.id,
      function (res) {
        console.log(
          "finale API is :::" + _self.api.get + "/" + _self.form.data.id
        );
        if (res.sucess) {
          console.log("Under res. sucess base ctl ", res.result.name);
          _self.populateForm(_self.form.data, res.result);
        } else {
          _self.form.error = true;
          _self.form.message = res.result.message;
        }
        console.log("i am in FORM", _self.form.data);
      }
    );
  }
  
  populateForm(form, data) {
    console.log(":Populate form in base ctl  :");
    form.id = data.id;
  }

  submit() {
    console.log(" submit from Base component");
    var _self = this;
    console.log("in submit mathod", this.form.data);
    this.serviceLocator.httpService.post(
      this.api.save,
      this.form.data,
      function (res) {
        _self.form.message = null;
        _self.form.inputerror = {};
        if (res.sucess) {
          console.log("i am in Submit sucess");
          _self.form.error = false;
          _self.form.message = "Data is saved";
          //_self.forward('/user')
        } else {
          _self.form.error = true;
          _self.form.inputerror = res.result.inputerror;

          console.log("Input error print ", _self.form.inputerror);

          _self.form.message = res.result.message;
        }
        //console.log('FORM', _self.form);
      }
    );
  }
  search() {
    console.log("i am in Search basecomponent ");
    var _self = this;

    _self.populateForm(_self.form.data, _self.form.searchParams);
    
    _self.form.searchParams["pageNo"] = _self.form.data.pageNo;
    _self.form.searchParams["pageSize"] = _self.form.data.pageSize;
    console.log("Search Form data", _self.form.searchParams);

    this.serviceLocator.httpService.post(
      _self.api.search,
      _self.form.searchParams,
      function (res) {
        if (res.sucess) {
          console.log("i am in search under if ");

          _self.form.list = res.result.list;
          console.log("List data print::::", _self.form.list);
          _self.form.pageNo = res.result.pageNo;
          _self.form.pageSize = res.result.pageSize;
          _self.form.count = res.result.count;
          _self.form.searchParams = res.result.searchParams;

          if (_self.form.count == 0) {
            console.log("gardad------------------------------");
            _self.form.message = "No record found";
            _self.form.error = true;
          }
          //console.log("List Size", _self.form.count,"Page No",_self.form.pageNo,"page Size",_self.form.pageSize,"count",_self.form.count);
        } else {
          _self.form.error = false;
          _self.form.message = null;
        }

        console.log("form ----------------------" + _self.form.message);
      }
    );
  }

  delete(id) {
    var _self = this;
    this.serviceLocator.httpService.get(
      _self.api.delete + "/" + id,
      function (res) {
        if (res.success) {
          _self.form.error = false;
          _self.form.message = "Data is deleted";
          _self.search();
        } else {
          _self.form.error = true;
          _self.form.message = res.result.message;
        }
      }
    );
  }

  forward(page) {
    console.log("Forward working :::");
    this.serviceLocator.forward(page);
  }
}
