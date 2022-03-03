import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',

})
export class MarksheetComponent extends BaseCtl {

  constructor(public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {
    super(serviceLocator.endpointService.MARKSHEET, serviceLocator, route)
  }


}
