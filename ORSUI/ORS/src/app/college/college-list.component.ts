import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  
})
export class CollegeListComponent extends BaseListCtl {
  constructor(public servicelocator: ServiceLocatorService, public router: ActivatedRoute) {
    super(servicelocator.endpointService.COLLEGE, servicelocator, router);

  }

}
