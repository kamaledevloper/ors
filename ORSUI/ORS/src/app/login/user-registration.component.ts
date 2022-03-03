import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from '../endpoint-service.service';
import { ServiceLocatorService } from '../service-locator.service';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',

})
export class UserRegistrationComponent extends LoginComponent {

  constructor(router: ActivatedRoute, public endpoint: EndpointServiceService, public serviceLocator: ServiceLocatorService) {
    super(router, endpoint, serviceLocator);
  }

  ngOnInit() {
  }

  public form = {
    error: false,
    message: null,
    inputerror: {},
    data: {},
  };

  reset() {
    this.form.error = false,
      this.form.message = null,
      this.form.inputerror = {};
 //   this.form.data = { id: null, pageNo: null, pageSize: null };
   // this.display();
  
  }


  submit() {
    var _self = this;


    console.log("Submit calling ::!!!!");

    _self.serviceLocator.httpService.post(this.endpoint.AUTH + "/register", this.form.data, function (res) {

      if (res.sucess) {
        _self.form.message = "User Registered Successfull please login";
        _self.form.error = true;

      }

      else {
        _self.form.inputerror = res.result.inputerror;




        console.log("Input error print ::::", res)



      }


    })
  }


}
