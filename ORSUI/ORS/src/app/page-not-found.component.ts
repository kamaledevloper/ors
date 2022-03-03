import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseCtl } from "./base.component";
import { ServiceLocatorService } from "./service-locator.service";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
})
export class PageNotFoundComponent extends BaseCtl {
  constructor(
    public servicelocator: ServiceLocatorService,
    public route: ActivatedRoute,
    public httpclint: HttpClient
  ) {
    super(servicelocator.endpointService.USER, servicelocator, route);

    console.log("i an in User Component ");
  }
}
