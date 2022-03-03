import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends BaseCtl {

  constructor(serviceLocator: ServiceLocatorService, route: ActivatedRoute) 
  { super(serviceLocator.endpointService.STUDENT, serviceLocator, route) }

  
  populateForm(form, data) {
    form.id = data.id;
    form.firstName = data.firstName;
    form.lastName = data.lastName;
    form.collegeId = data.collegeId;
    form.email = data.email;
    form.mobileNo = data.mobileNo;
    form.dob = data.dob;
  }


  cancel(){
    this.forward('/studentlist')
  }

}
