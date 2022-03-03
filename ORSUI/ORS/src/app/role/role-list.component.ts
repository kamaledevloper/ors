import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent extends BaseListCtl {

  constructor(serviceLocator: ServiceLocatorService, route: ActivatedRoute) {

    super(serviceLocator.endpointService.ROLE, serviceLocator, route)
  }



}
