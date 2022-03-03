import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',

})
export class StudentListComponent extends BaseListCtl {

  constructor(public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {




    super(serviceLocator.endpointService.STUDENT, serviceLocator, route)
  }

  

}
