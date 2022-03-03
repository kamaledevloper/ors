import { ActivatedRoute } from "@angular/router";
import { BaseCtl } from "./base.component";
import { ServiceLocatorService } from "./service-locator.service";
export class BaseListCtl extends BaseCtl {
  //flag: boolean;
  constructor(
    public endpoint,
    public locator: ServiceLocatorService,
    public route: ActivatedRoute
  ) {
    super(endpoint, locator, route);
  }
  ngOnInit() {
    console.log("i am in base+list component NGOnIn it");
    this.preload();
    this.form.data.pageNo = 1;
    this.form.data.pageSize = 5;
    this.display();
  }
  display() {
    console.log("i am in display base list CTL ");
    this.form.error = false;
    this.form.message = null;
    this.search();
  }
  submit() {
    console.log(" submit from Base-list component");
    this.form.error = false;
    this.form.message = null;
    this.form.data.pageNo = 1;
    this.form.data.pageSize = 5;
    this.search();
  }

  delete(id) {
    super.delete(id);
  }

  next() {
    console.log("i am in next BAse list CTL ");
    this.form.error = false;
    this.form.message = null;

    this.form.data.pageNo++;

    //console.log(this.form.data.pageNo + '----pageNo')
    this.display();
  }

  previous() {
    this.form.error = false;
    this.form.message = null;
    if (this.form.data.pageNo > 0) {
      this.form.data.pageNo--;
      this.display();
    }
  }

  reset() {
    //this.flag = false;

    this.form.searchParams = {};
    this.form.error = false;
    this.form.message = null;
    this.submit();
  }
  deleteAll(ids) {
    for (let i = 0; i < ids.length; i++) {
      this.delete(ids[i]);
    }
  }
  selectAll() {}
}
