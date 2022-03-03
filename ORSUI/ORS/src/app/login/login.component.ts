import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from '../endpoint-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public route: ActivatedRoute, public endpoint: EndpointServiceService, public servicelocator: ServiceLocatorService) {
    var s = "in";
    var _self = this;
    this.servicelocator.getPathVariable(this.route, function (params) {
      s = params["in"];
      console.log("s Print :::", s);
    })
    if (s == "logout") {
      _self.form.message = "Logout Successfull"
    } else if (s != undefined) {
      _self.form.error = true;
      _self.form.message = "Session Expired Please Login";
    }
  }
  ngOnInit() {
  }
  public form = {
    error: false,
    message: null,
    inputerror: {},
    data: {},
  };
  signUp() {
    console.log("sing UP page ");
    this.servicelocator.forward('signup');
  }
  signIn() {
    var _self = this;
    var uri = 'in'

    console.log("Form data print :::", _self.form.data)
    this.servicelocator.httpService.post(this.endpoint.AUTH + '/login', _self.form.data, function (res) {
      if (res.sucess) {
        localStorage.setItem('firstName', res.result.data.firstName);
        localStorage.setItem('roleId', res.result.data.roleId);
        //  localStorage.setItem('roleName', res.result.data.roleName);
        _self.servicelocator.getPathVariable(_self.route, function (params) {

          uri = params['in'];
        })
        if (uri == undefined) {
          console.log("1")
          _self.servicelocator.forward('/dashbord');

        } else if (uri == "logout") {
          _self.servicelocator.forward('/dashbord');
        }
        else if (uri != undefined) {
          _self.servicelocator.forward(uri);
        }
      } else {
        console.log('inelse : ', res.result.data);
        _self.populateForm(_self.form.data, res.result.data);

        _self.form.inputerror = res.result.inputerror;
        console.log("------------------", res.result.inputerror)
        _self.form.error = false;

        if (res.result.msg) {
          //  _self.populateForm(_self.form.data, res.result.data);
          _self.form.error = true;
          _self.form.message = res.result.msg;

        } else {
          _self.form.message = null
        }

      }
    })
  }

  populateForm(form, data) {


    console.log("I am in populate Loging ::")

    form.login = data.login;
    form.password = data.password;


    console.log("I am in populate Loging ::", form)



  }

}
