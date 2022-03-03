import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseCtl } from "../base.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
})
export class ChangePasswordComponent extends BaseCtl {
  constructor(
    public service: ServiceLocatorService,
    public route: ActivatedRoute,
    public httpclint: HttpClient
  ) {
    super(service.endpointService.USER, service, route);
    console.log("Change passwprd CTL running :::");
  }

  ngOnInit() {}
  submit() {
    console.log("change password submit calling :::");
    var _self = this;
    this.serviceLocator.httpService.post(
      this.api.endpoint + "/changePassword",
     

      this.form.data,
      function (res) {
        if (res.sucess) {
          _self.form.error = false;
          _self.form.message = "Password Changed successfully";
        } else {
          _self.form.error = true;
          _self.form.message = "Error";
        }
      }
    );
  }

  populateForm(form, data) {
    form.oldPassword = data.oldPassword;
    form.password = data.password;
    form.confirmPassword = form.confirmPassword;
  }
}
