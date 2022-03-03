import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  
})
export class FacultyListComponent extends BaseListCtl {
  constructor(serviceLocator: ServiceLocatorService, route: ActivatedRoute) { super(serviceLocator.endpointService.FACULTY, serviceLocator, route) }

}
