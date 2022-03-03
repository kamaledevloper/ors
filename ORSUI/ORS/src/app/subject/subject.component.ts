import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent extends BaseCtl {

  constructor(serviceLocator: ServiceLocatorService, router: ActivatedRoute) {
    super(serviceLocator.endpointService.SUBJECT, serviceLocator, router)
  }
  populateForm(form, data) {
    form.id = data.id
    form.courseId = data.courseId
    form.subjectName = data.subjectName
    form.subjectDescription = data.subjectDescription

  }

  cancel(){
    this.forward('/subjectlist')
  }
}