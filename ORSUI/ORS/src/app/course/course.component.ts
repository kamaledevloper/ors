import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends BaseCtl {

  constructor(serviceLocator: ServiceLocatorService, router: ActivatedRoute) {


    super(serviceLocator.endpointService.COURSE, serviceLocator, router);
  }
  populateForm(form,data){
    form.id=data.id
    form.courseName=data.courseName
    form.courseDescription=data.courseDescription



    form.courseDuration=data.courseDuration
  }
  cancel(){
    this.forward('/courselist')
  }
}
