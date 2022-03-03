import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
  selector: "app-time-table-list",
  templateUrl: "./time-table-list.component.html",
})
export class TimeTableListComponent extends BaseListCtl {
  constructor(serviceLocator: ServiceLocatorService, router: ActivatedRoute) {
    super(serviceLocator.endpointService.TIMETABLE, serviceLocator, router);
  }
}
