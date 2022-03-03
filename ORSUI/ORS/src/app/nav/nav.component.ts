import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { CookieService } from "ngx-cookie-service";
import { EndpointServiceService } from "../endpoint-service.service";
import { ServiceLocatorService } from "../service-locator.service";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  firstname = "";

  rolename = "";
  roleid = "";
  menu = {};

  constructor(
    private transalate: TranslateService,
    private cookie: CookieService,
    private serviceLocator: ServiceLocatorService,
    private endpoint: EndpointServiceService
  ) {
    console.log("Constructor working nav tab");
    this.changeLocale("en");

    transalate.setDefaultLang(localStorage.getItem("locale"));
  }
  changeLocale(locale: string) {
    localStorage.setItem("locale", locale);

    this.transalate.use(localStorage.getItem("locale"));

    this.ngOnInit();
  }
  ngOnInit() {}

  checkLogin() {
    console.log("i am in check Login mathod");
    var _self = this;
    var session = "";

    console.log("local storage print", localStorage);
    session = localStorage.getItem("firstName");

    console.log("Session data print ::::" + localStorage.getItem("firstName"));
    console.log(
      "Session data print Role name print::",
      localStorage.getItem("roleId")
    );

    console.log("Session Print ::::");
    if (session != null) {
      this.firstname = localStorage.getItem("firstName");

      this.roleid = localStorage.getItem("roleId");

      console.log("Role id print again ", this.roleid);
      if (this.roleid == "1") {
        this.rolename = "Admin";
      }
      if (this.roleid == "2") {
        this.rolename = "Student";
      }

      if (this.roleid == "3") {
        this.rolename = "Faculty";
      }

      if (this.roleid == "4") {
        this.rolename = "Kiosk";
      } else {
        this.rolename + "Gaust";
      }

      console.log("final role name is ::: ", this.rolename);

      return true;
    } else {
      return false;
    }
  }

  logout() {
    var _self = this;
    this.serviceLocator.httpService.get(
      "http://localhost:8081/Auth/logout",
      function (res) {
        console.log("in logout mathod ");
        if (res.sucess) {
          localStorage.removeItem("firstName");
          localStorage.removeItem("roleName");

          _self.serviceLocator.forward("login");
        } else {
          console.log("inelse");
        }
      }
    );
    _self.cookie.delete("connect.sid");
  }
}
