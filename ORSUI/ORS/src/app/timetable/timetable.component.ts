import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { EndpointServiceService } from '../endpoint-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent extends BaseCtl {

  constructor(public servicelocator: ServiceLocatorService, public route: ActivatedRoute) {

    super(servicelocator.endpointService.TIMETABLE, servicelocator, route);

  }


}
