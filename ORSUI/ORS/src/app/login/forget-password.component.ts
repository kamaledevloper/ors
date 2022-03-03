import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from '../endpoint-service.service';
import { ServiceLocatorService } from '../service-locator.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private serviceLocator: ServiceLocatorService, public endPoint: EndpointServiceService) { }
  form = {
    error: false,
    message: null,
    data: {},
    inputerror: {}
  }

  ngOnInit() {
  }


  reset() {
    this.form.error = false,
      this.form.message = null,
      this.form.inputerror = {};
 //   this.form.data = { id: null, pageNo: null, pageSize: null };
   // this.display();
  
  }


  forget() {
    var _self = this;
    console.log("Forget password working ")
    this.serviceLocator.httpService.post(this.endPoint.AUTH + "/forgotpassword", this.form.data, function (res) {
      if (res.sucess) {
        _self.populateForm(_self.form.data, res.result);
        _self.form.message = res.result;

        _self.form.error = false;
      } else {


        _self.form.inputerror = res.result.inputerror.login;
        console.log("input error print :::" + res.result.inputerror.login)
        _self.form.message = res.result.inputerror.login;
        _self.form.error = true;
      }
    })
  }
  populateForm(form, data) {
    form.login = data.login;
  }

}
