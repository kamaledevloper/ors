import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseListCtl } from "../base-list.component";
import { ServiceLocatorService } from "../service-locator.service";

@Component({
  selector: "app-marksheet-list",
  templateUrl: "./marksheet-list.component.html",
})
export class MarksheetListComponent extends BaseListCtl {
  constructor(
    public servceLocator: ServiceLocatorService,
    public route: ActivatedRoute
  ) {
    super(servceLocator.endpointService.MARKSHEET, servceLocator, route);
  }
}
