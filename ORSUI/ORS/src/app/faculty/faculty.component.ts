import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent extends BaseCtl {

  constructor(public serviceLocator: ServiceLocatorService, router: ActivatedRoute) {

    super(serviceLocator.endpointService.FACULTY, serviceLocator, router)


  }

  populateForm(form, data) {
    form.id = data.id;
    form.firstName = data.firstName;
    form.lastName = data.lastName;
    form.email = data.email;
    form.gender = data.gender;
    form.mobileNo = data.mobileNo;
    form.dob = data.dob;
    form.address = data.address;
    form.collegeId = data.collegeId;
    form.subjectId = data.subjectId;
    form.courseId = data.courseId
  }

  cancel() {
    this.forward('/facultylist')
  }
}
