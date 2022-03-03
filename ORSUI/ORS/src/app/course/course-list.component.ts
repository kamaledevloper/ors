import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',

})
export class CourseListComponent extends BaseListCtl {

  constructor(serviceLOcator: ServiceLocatorService, route: ActivatedRoute) { super(serviceLOcator.endpointService.COURSE, serviceLOcator,route) }



}
