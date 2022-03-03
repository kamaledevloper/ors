import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from 'src/app/base-list.component'
import { ActivatedRoute } from '@angular/router'
import { ServiceLocatorService } from '../service-locator.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent extends BaseListCtl {
  constructor(
    public serviceLocator: ServiceLocatorService, public router: ActivatedRoute
  ) { super(serviceLocator.endpointService.USER, serviceLocator, router); }
 
  populateForm(form, searchParams) {

    console.log("I am in populate form User LIst CTL search params role ID "+searchParams.roleId);
    form.firstName = searchParams.firstName;
    // form.lastName = searchParams.lastName;
    form.login = searchParams.login;
    //form.status = searchParams.status;
    form.roleId = searchParams.roleId;
  }

  search() {
    console.log("i am in search user List Component:::")
    this.form.data.pageSize = 5;
    super.search();
  }
  preload() {
    console.log("i am working preload::::");
    super.preload();

  }
}
