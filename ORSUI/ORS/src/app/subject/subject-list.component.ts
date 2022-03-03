import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',

})
export class SubjectListComponent extends BaseListCtl {

  constructor(public serviceLOcator: ServiceLocatorService, public router: ActivatedRoute) {
    super(serviceLOcator.endpointService.SUBJECT, serviceLOcator, router)
  }

  populateForm(form, searchParams) {
    form.subjectName = searchParams.subjectName;
    form.courseId = searchParams.courseId;
  }
}
