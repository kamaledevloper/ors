(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-nav> </app-nav>\n\n\n<router-outlet></router-outlet>\n\n\n<app-foot></app-foot>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/college/college-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/college/college-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n    <div class=\"content-wrapper\" style=\"background-image: url(./assets/list.jpg); background-repeat: no-repeat; background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 850px;\">\n        <div class=\"d-flex bg-primary text-white paddin \">\n            <h1 class=\"text-center container-fluid\">{{'College List' |translate}} </h1>\n        </div>\n        <div class=\"text-center row\">\n            <div class=\"col-2\"></div>\n            <form class=\"form-inline pt-3\">\n                <div class=\"form-group  pr-3\">\n                    <label for=\"College Name\" class=\"form-check-label pr-3\"> {{'College Name' |translate}}</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\" name=\"firstName\"\n                        placeholder=\"Enter Name\" id=\"name\">\n                </div>\n                <div class=\"form-group pr-3\">\n                    <label for=\"city\" class=\"form-check-lable pr-3\"> {{'City' |translate}}</label>\n                    <input type=\"text\" class=\"form-control\" name=\"city\" id=\"city\" placeholder=\"Enter College city\"\n                        [(ngModel)]=\"form.searchParams.city\">\n\n                </div>\n                <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search' |translate}}</button>&nbsp;&nbsp;\n                <button class=\"btn-primary btn\" (click)=\"reset()\">{{'Reset' |translate}}</button>\n\n            </form>\n\n        </div>\n        \n        <br>\n\n        <div class=\"col-6\" *ngIf=\"form.error\" class=\"alert alert-danger\">{{form.message}} </div>\n        <div class=\"col-6\" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\n            {{form.message}}\n        </div>\n\n        <br>\n\n        <div class=\"p-1\">\n\n\n            <div class=\"table-responsive\">\n\n\n                <table class=\"table table-bordered table-striped table-hover\">\n                    <thead class=\"thead-light text-uppercase\">\n\n                        <tr>\n\n                            <th>{{'S.No' |translate}}</th>\n                            <th>{{'Name' |translate}}</th>\n                            <th>{{'Address' |translate}}</th>\n                            <th>{{'City' |translate}}</th>\n                            <th>{{'State' |translate}}</th>\n                            <th>{{'Phone No' |translate}}</th>\n                            <th>{{'Edit' |translate}} / {{'Delete' |translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let college of form.list ; let i = index \">\n                            <td> {{((form.pageNo-1)*10)+i+1}}</td>\n                            <td> {{college.name}}</td>\n                            <td> {{college.address}}</td>\n                            <td> {{ college.city }} </td>\n                            <td> {{ college.state }} </td>\n                            <td> {{ college.phoneNo }} </td>\n                            <td> <a (click)=\"forward('/college/' +  college.id)\" style=\"cursor: pointer;\">\n\n                                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\n                                </a>\n                                / <a (click)=\"delete(college.id)\" style=\"cursor: pointer;\">\n                                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                                </a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <div class=\"col-12 form-inline mb-0\">\n                    <div class=\" col-4 text-left\">\n                        <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n                        <ng-template #sus>\n                            <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous' |translate}}</button>\n                        </ng-template>\n                        <ng-template #fail>\n                            <button (click)=\"previous()\" disabled class=\"btn btn-light\">{{'previous' |translate}}</button>\n                        </ng-template>\n                    </div>\n\n                   <div class=\"col-4 text-center \">\n                        <button class=\"btn-primary btn\" (click)=\"forward('/college/')\">{{'Add' |translate}}</button>\n                    </div>\n\n                    <div class=\"col-4 text-right \">\n\n                        <div *ngIf=\"form.count>(form.pageSize*form.pageNo); then susN else failN\"></div>\n                        <ng-template #susN>\n                            <button (click)=\"next()\" class=\"btn btn-success\">{{'next'|translate}}</button>\n                        </ng-template>\n                    \n                    \n                        <ng-template #failN>\n                            <button (click)=\"next()\" disabled class=\"btn btn-light\" > {{'next'|translate}}</button>\n                        </ng-template>\n                    \n                    \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</body>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/college/college.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/college/college.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row\">\n    <div class=\"row ml-3\" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id > 0; then hAdd else hUpdate  \"></div>\n\n                        <ng-template #hUpdate>\n                            <h1> {{'Add College'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hAdd>\n                            <h1> {{'Update College'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\"alert alert-success\">\n                        {{form.message}}\n\n                    </div>\n                    <form>\n\n                        <div class=\"form-group row\">\n                            <label for=\"name\" class=\"form-check-label\">{{'College'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.name\" name=\"name\" class=\"form-control\"\n                                    placeholder=\" {{'Enter College Name' |translate}}\" id=\"name\" [value]=\"form.data.name\">\n                            </div>\n\n\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.name}}\n                            </span>\n                        </div>\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"address\" class=\"form-check-label\">{{'Address' |translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.address\" name=\"address\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Address'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.address}} </span>\n                        </div>\n\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'City'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.city\" name=\"city\" class=\"form-control\"\n                                    placeholder=\" {{'Enter Phone Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.city}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"state\" class=\"form-check-label\">{{'State'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.state\" name=\"state\" class=\"form-control\"\n                                    placeholder=\"{{'Enter State' |translate }}\" id=\"state\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.state}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"phoneNo\" class=\"form-check-label\">{{'Phone'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.phoneNo\" name=\"phoneNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Phone Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.phoneNo}} </span>\n                        </div>\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <!--  \n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" name=\"{{'Reset'}}\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update'}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'}}</button>\n                                </ng-template>\n                            </div>\n                    -->\n\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then  update  else add \"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save' |translate}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" name=\"{{'Reset'|translate}}\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update'|translate }}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel' |translate}}</button>\n                                </ng-template>\n                            </div>\n\n                        </div>\n\n                    </form>\n                </div>\n\n\n\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course/course-list.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course/course-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;width:100%;\n      height: 850px;bottom: 0%;\">\n      <div class=\"d-flex bg-primary text-white paddin \">\n        <h1 class=\"text-center container-fluid \">{{'Course List' |translate}}</h1>\n      </div>\n      <div class=\"text-center row\">\n        <div class=\"col-2\"></div>\n        <form class=\"form-inline pt-3  \">\n          <div class=\"form-group  pr-3\">\n            <label for=\"courseName\" class=\"form-check-label pr-3 \">{{'Name' |translate}} : </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Course Name\" name=\"courseName\"\n              [(ngModel)]=\"form.searchParams.courseName\" id=\"courseName\">\n          </div>\n          <div class=\"form-group  pr-3\">\n            <label for=\"courseDescription\" class=\"form-check-label pr-3 \">{{'Description' |translate}} : </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Course Description\" name=\"courseDescription\"\n              [(ngModel)]=\"form.searchParams.courseDescription\" id=\"fName\">\n          </div>\n          <div class=\"form-group pr-3\">\n            <label for=\"courseDuration\" class=\"form-check-label pr-3\">{{'Duration' |translate}}:\n            </label>\n            <span class=\"text-danger ml-auto mb-auto\"> {{form.inputerror.courseDuration}} </span>\n            <select [(ngModel)]=\"form.data.courseDuration\" name=\"gender\" class=\"form-control\" id=\"courseDuration\">\n              <option [value]=default [disabled]=\"true\" selected disabled>Select Course Duration</option>\n              <option [value]=\"1\">1 Year</option>\n              <option [value]=\"2\">2 Year</option>\n              <option [value]=\"3\">3 Year</option>\n              <option [value]=\"4\">4 Year</option>\n              <option [value]=\"5\">5 Year</option>\n            </select>\n          </div>\n          <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search' |translate}}</button>&nbsp;&nbsp;\n          <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset' |translate}}</button>\n        </form>\n      </div>\n      <br>\n      <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\n      <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\n        {{form.message}}</div>\n  \n      <br>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th>{{'S.No' |translate}}</th>\n                <th>{{'Course Name' |translate}}</th>\n                <th>{{'Course Description' |translate}}</th>\n                <th>{{'Course Duration' |translate}}</th>\n                <th>{{'Edit' |translate}} / {{'Delete' |translate}}</th>\n              </tr>\n            </thead>\n  \n            <tbody>\n              <tr *ngFor=\"let course of form.list; let i = index\">\n                <td> {{((form.pageNo-1)*10)+i+1}} </td>\n                <td> {{ course.courseName }} </td>\n                <td> {{ course.courseDescription }} </td>\n                <td> {{ course.courseDuration }} </td>\n                <td>\n                  <a (click)=\"forward( '/course/' +  course.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\n                  </a> / <a (click)=\"delete(course.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\" col-12 form-inline mb-0  \">\n            <div class=\"col-4 text-left \">\n              <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n              <ng-template #sus>\n                <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous' |translate}}</button>\n              </ng-template>\n              <ng-template #fail>\n                <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous' |translate}}</button>\n              </ng-template>\n            </div>\n            <div class=\"col-4 text-center \">\n              <button class=\"btn-primary btn \" (click)=\"forward('/course/')\">{{'Add' |translate}}</button>\n            </div>\n            <div class=\"col-4 text-right \">\n              <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\n              <ng-template #susN>\n                <button (click)=\"next()\" class=\"btn btn-success\">{{'next' |translate}}</button>\n              </ng-template>\n              <ng-template #failN>\n                <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next' |translate}}</button>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br><br>\n    </div>\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/course/course.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course/course.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1> {{ 'Add Course' |translate }} </h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1> {{ 'Update Course' |translate }}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row\">\n                            <label for=\"courseName\" class=\"form-check-label\">Course Name:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.courseName\" name=\"courseName\" class=\"form-control\"\n                                    placeholder=\" {{'Enter Course Name'|translate }}\" id=\"courseName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.courseName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"courseDescription\" class=\"form-check-label\">Course Description:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.courseDescription\" name=\"courseDescription\"\n                                    class=\"form-control\" placeholder=\" {{ 'Enter Course Description' |translate }}\" id=\"courseDescription\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.courseDescription}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"courseDuration\" class=\"form-check-label\">Course Duration:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.courseDuration\" name=\"courseDuration\"\n                                    class=\"form-control\" id=\"courseDuration\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>Select Course Duration\n                                    </option>\n                                    <option value=\"1 Year\">1 Year</option>\n                                    <option value=\"2 Year\">2 Year</option>\n                                    <option value=\"3 Year\">3 Year</option>\n                                    <option value=\"4 Year\">4 Year</option>\n                                    <option value=\"5 Year\">5 Year</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.courseDuration}} </span>\n                        </div>\n\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\"> {{'Save' |translate}} </button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \"> {{ 'Update' |translate }}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{ 'Cancel ' |translate }}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n    \n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashbord/dashbord.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashbord/dashbord.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \">\n    <div class=\"content-wrapper row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\">\n\n        <div class=\"col-sm-12\">\n            <h1 class=\"text-danger text-center \" style=\"margin-top: 17%;\">Welcome To Online Result System</h1>\n        </div>\n\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faculty/faculty-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;width:100%;\n      height: 850px;bottom: 0%;\">\n    <div class=\"d-flex bg-primary text-white paddin \">\n      <h1 class=\"text-center container-fluid \">{{'Faculty List' |translate}}</h1>\n    </div>\n    <div class=\"text-center col-12 row\">\n      <div class=\"col-2\"></div>\n      <form class=\"form-inline pt-3  \">\n        <div class=\"form-group  pr-3\">\n          <label for=\"fName\" class=\"form-check-label pr-3 \">{{'First Name' |translate}} : </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter First Name'|translate }}\" name=\"firstName\"\n            [(ngModel)]=\"form.searchParams.firstName\" id=\"fName\">\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"email\" class=\"form-check-label pr-3 \">{{'Email Id' |translate}} : </label>\n          <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\"\n            placeholder=\" {{'Enter Email Id' |translate }}\" [(ngModel)]=\"form.searchParams.email\">\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"role\" class=\"form-check-label pr-3\">{{'College' |translate}} :</label>&nbsp;\n          <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.searchParams.collegeId\" id=\"role\">\n            <option [value]=0 [disabled]=\"true\" selected disabled>{{'Select Faculty College'}}</option>\n            <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.key\">{{opt.value}}</option>\n          </select>\n        </div>\n        <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search' |translate}}</button>&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset' |translate}}</button>\n      </form>\n    </div>\n    <br>\n    <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\n    <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\n      {{form.message}}</div>\n\n    <br>\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{'S.No' |translate}}</th>\n              <th>{{'First Name' |translate}}</th>\n              <th>{{'Last Name' |translate}}</th>\n              <th>{{'Email Id' |translate}}</th>\n              <th>{{'Gender' |translate}}</th>\n              <th>{{'College' |translate}}</th>\n              <th>{{'Course' |translate}}</th>\n              <th>{{'Subject' |translate}}</th>\n              <th>{{'Phone' |translate}}</th>\n              <th>{{'DOB' |translate}}</th>\n              <th>{{'Edit' |translate}} / {{'Delete' |translate}}</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let faculty of form.list; let i = index\">\n              <td> {{((form.pageNo-1)*10)+i+1}} </td>\n              <td> {{ faculty.firstName }} </td>\n              <td> {{ faculty.lastName }} </td>\n              <td> {{ faculty.email }} </td>\n              <td> {{ faculty.gender }} </td>\n              <td> {{ faculty.collegeName }} </td>\n              <td> {{ faculty.courseName }} </td>\n              <td> {{ faculty.subjectName }} </td>\n              <td> {{ faculty.mobileNo }} </td>\n              <td> {{ faculty.dob | date : 'dd-MM-yyyy'}} </td>\n              <td><a (click)=\"forward( '/faculty/' +  faculty.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\n                </a> / <a (click)=\"delete(faculty.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n    <div class=\" col-12 form-inline mb-0  \">\n      <div class=\"col-4 text-left \">\n        <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n        <ng-template #sus>\n          <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous' |translate}}</button>\n        </ng-template>\n        <ng-template #fail>\n          <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous' |translate}}</button>\n        </ng-template>\n      </div>\n      <div class=\"col-4 text-center \">\n        <button class=\"btn-primary btn \" (click)=\"forward('/faculty/')\">{{'Add' |translate}}</button>\n      </div>\n      <div class=\"col-4 text-right \">\n        <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\n        <ng-template #susN>\n          <button (click)=\"next()\" class=\"btn btn-success\">{{'next' |translate}}</button>\n        </ng-template>\n        <ng-template #failN>\n          <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next' |translate}}</button>\n        </ng-template>\n      </div>\n    </div>\n    <br><br>\n  </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faculty/faculty.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 text-center\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 1155px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h3>{{'Add Faculty'|translate}}</h3>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h3>{{'Update Faculty'|translate}}</h3>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n\n                        <div class=\"form-group row\">\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name' |translate}}\" id=\"fName\"\n                                    [value]=\"form.data.firstName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"email\" class=\"form-check-label\">{{'Email'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n                                <ng-template #lUpdate>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\" class=\"form-control\"\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"email\" disabled>\n                                </ng-template>\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email'|translate}}\" id=\"email\">\n                                </ng-template>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.email}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"collegeId\" class=\"form-check-label \">{{'College'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.collegeList!=null\" name=\"collegeId\"\n                                    [(ngModel)]=\"form.data.collegeId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>Select College Name\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.collegeList\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"collegeId\"> {{form.inputerror.collegeId}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\n                                    [(ngModel)]=\"form.data.courseId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>Select Course Name\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"courseId\"> {{form.inputerror.courseId}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"subjectId\" class=\"form-check-label \">{{'Subject Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.subjectList!=null\" name=\"subjectId\"\n                                    [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>Select Subject Name\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"subjectId\"> {{form.inputerror.subjectId}}\n                            </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-mars grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>Select Gender</option>\n\n                                    <option value=\"Male\">Male</option>\n                                    <option value=\"Female\">Female</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/foot/foot.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/foot/foot.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" style=\" position: fixed;\nleft: 0;\nbottom: 0;\nwidth: 100%;\">\n    <div class=\"container-fluid d-flex bg-primary justify-content-center \">\n        <h5 class=\"text-center text-white float-center \">  Copyright &copy; Rays 2021</h5>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forget-password.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forget-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 \" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5 mt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <h1>{{'Forgot Password'|translate}}</h1>\n                    </div>\n\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Email ID'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <span class=\"text-danger ml-auto mb-auto\"> {{form.inputerror.login}} </span>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n\n\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Registered Email ID'|translate}}\" id=\"login\">\n                            </div>\n                        </div>\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <button (click)=\"forget()\" class=\"btn btn-success\">{{'GO'|translate}}</button>  &nbsp;\n                              \n                                <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\n\n                            </div>\n                        </div>\n\n\n\n\n\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"row container-fluid\">\n    <div class=\" row ml-3 text-center \" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4  \" style=\"margin-top: 7%;\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h1 class=\"text-center\">{{'Login' |translate}}</h1>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form class=\"form-signin\">\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Login ID' |translate}}<span\n                                    class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <input id=\"login\" type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\n                                    placeholder=\"{{'Enter Login ID' | translate}}\" class=\"form-control\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"login\"> {{form.inputerror.login}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}<span\n                                    class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input id=\"password\" type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                    placeholder=\" {{'Enter Password' |translate}}\" class=\"form-control\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"password\"> {{form.inputerror.password}}\n                            </span>\n                        </div>\n                        <button (click)=\"signIn()\" class=\"btn btn-success mr-2\">{{'Sign In' |translate}}</button>\n                        <button (click)=\"signUp()\" class=\"btn btn-primary \">{{'Sign Up' |translate}}</button>\n                        <br>\n                        <a routerLink=\"/forgotpassword\">{{'Forgot password' |translate}}</a>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/user-registration.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/user-registration.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\" row ml-3\" style=\"background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 1100px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <h1>{{'User Registration'|translate}}</h1>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row\">\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\n                                    [value]=\"form.data.firstName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.firstName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Login'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n                                <ng-template #lUpdate>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\n                                </ng-template>\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email ID'|translate}}\" id=\"login\">\n                                </ng-template>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"confirmPassword\" class=\"form-check-label\">{{'Confirm Password'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input type=\"password\" [(ngModel)]=\"form.data.confirmPassword\" name=\"confirmPassword\"\n                                    class=\"form-control\" placeholder=\"{{'Confirm Password'|translate}}\"\n                                    id=\"confirmPassword\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.confirmPassword}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>{{'Select\n                                        Gender'|translate}}</option>\n                                    <option [value]=\"Male\">Male</option>\n                                    <option [value]=\"Female\">Female</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-birthday-cake grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                              \n                                <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset'|translate}}</button>\n\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marksheet/marksheet-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n  <div\n    class=\"content-wrapper\"\n    style=\"\n      padding-top: 0%;\n      background-image: url(./assets/list.jpg);\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;\n      width: 100%;\n      height: 850px;\n      bottom: 0%;\n    \"\n  >\n    <div class=\"d-flex bg-primary text-white paddin\">\n      <h1 class=\"text-center container-fluid\">\n        {{ \"Marksheet List\" | translate }}\n      </h1>\n    </div>\n\n    <div class=\"text-center row\">\n      <div class=\"col-2\"></div>\n      <form class=\"form-inline pt-3 mr-3\">\n        <div class=\"form-group pr-3\">\n          <label for=\"fName\" class=\"form-check-label pr-3\"\n            >{{ \"\n            \n            \n            By Name\" | translate }} :\n          </label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\" {{ 'Enter Name' | translate }}\"\n            name=\"firstName\"\n            [(ngModel)]=\"form.searchParams.name\"\n            id=\"name\"\n          />\n        </div>\n     \n        <div class=\"form-group pr-3\">\n          <label for=\"rollNo\" class=\"form-check-label pr-3\"\n            >{{ \"RollNo\" | translate }} :</label\n          >&nbsp;\n          <select\n            class=\"form-control\"\n            name=\"rollNo\"\n            [(ngModel)]=\"form.searchParams.rollNo\"\n            id=\"role\"\n          >\n            <option [value]=default [disabled]=\"true\" selected disabled>\n              Select Rollnumber\n            </option>\n\n\n            <option *ngFor=\"let opt of form.preload.marksheetList\" [value]=\"opt.rollNo\">\n            {{opt.rollNo}}\n            </option>\n          </select>\n        </div>\n\n<h1>        \n</h1>\n        <button class=\"btn-primary btn\" (click)=\"submit()\">\n          {{ \"Search\" | translate }}</button\n        >&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">\n          {{ \"Reset\" | translate }}\n        </button>\n      </form>\n    </div>\n    <br />\n    <div class=\"col-6\" *ngIf=\"form.error\" class=\"alert alert-danger\">\n      {{ form.message }}\n    </div>\n    <div\n      class=\"col-6\"\n      *ngIf=\"!form.error && form.message != null\"\n      class=\"alert alert-success\"\n    >\n      {{ form.message }}\n    </div>\n\n    <br />\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{ \"S.No\" | translate }}</th>\n              <th>{{ \"Roll number\" | translate }}</th>\n              <th>{{ \"Name\" | translate }}</th>\n              <th>{{ \"Physics\" | translate }}</th>\n              <th>{{ \"Chemistry\" | translate }}</th>\n              <th>{{ \"Maths\" | translate }}</th>\n              <th>{{ \"Total\" | translate }}</th>\n\n              <th>{{ \"Result\" | translate }}</th>\n\n              <th>{{ \"Edit\" | translate }} / {{ \"Delete\" | translate }}</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let student of form.list; let i = index\">\n              <td>{{ (form.pageNo - 1) * 10 + i + 1 }}</td>\n              <td>{{ student.rollNo }}</td>\n              <td>{{ student.name }}</td>\n              <td>{{ student.physics }}</td>\n              <td>{{ student.chemistry }}</td>\n              <td>{{ student.maths }}</td>\n\n              <td>{{ student.maths + student.physics + student.chemistry }}</td>\n\n              <td>\n                <div\n                  *ngIf=\"\n                    student.maths + student.physics + student.chemistry > 99;\n                    then susN;\n                    else failN\n                  \"\n                ></div>\n                <ng-template #susN>\n                  {{ \"Pass\" | translate }}\n                </ng-template>\n                <ng-template #failN>\n                  {{ \"Fail\" | translate }}\n                </ng-template>\n\n\n\n            \n            \n            \n            \n            \n            \n              </td>\n\n              <td>\n                <a\n                  (click)=\"forward('/marksheet/' + student.id)\"\n                  style=\"cursor: pointer\"\n                >\n                  <i\n                    class=\"fa fa-edit\"\n                    style=\"font-size: 20px; color: blue\"\n                  ></i>\n                </a>\n                /\n                <a (click)=\"delete(id)\" style=\"cursor: pointer\">\n                  <i\n                    class=\"fa fa-trash-o\"\n                    style=\"font-size: 20px; color: red\"\n                  ></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"col-12 form-inline mb-0\">\n          <div class=\"col-4 text-left\">\n            <div *ngIf=\"form.pageNo > 1; then sus; else fail\"></div>\n            <ng-template #sus>\n              <button (click)=\"previous()\" class=\"btn btn-success\">\n                {{ \"previous\" | translate }}\n              </button>\n            </ng-template>\n            <ng-template #fail>\n              <button (click)=\"previous()\" disabled class=\"btn btn-light\">\n                {{ \"previous\" | translate }}\n              </button>\n            </ng-template>\n          </div>\n          <div class=\"col-4 text-center\">\n            <button class=\"btn-primary btn\" (click)=\"forward('/marksheet/')\">\n              {{ \"Add\" | translate }}\n            </button>\n          </div>\n          <div class=\"col-4 text-right\">\n            <div\n              *ngIf=\"\n                form.count > form.pageSize * form.pageNo;\n                then susN;\n                else failN\n              \"\n            ></div>\n            <ng-template #susN>\n              <button (click)=\"next()\" class=\"btn btn-success\">\n                {{ \"next\" | translate }}\n              </button>\n            </ng-template>\n            <ng-template #failN>\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">\n                {{ \"next\" | translate }}\n              </button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br /><br />\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marksheet/marksheet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row\">\n  <div\n    class=\"row ml-3 text-center\"\n    style=\"\n      padding-top: 0%;\n      background-image: url(./assets/form.jpg);\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;\n      width: 100%;\n      height: 1155px;\n    \"\n  >\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4 pt-5\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"text-center mb-4\">\n            <div *ngIf=\"form.data.id > 0; then hUpdate; else hAdd\"></div>\n            <ng-template #hAdd>\n              <h3>{{ \"Add Marksheet\" | translate }}</h3>\n            </ng-template>\n            <ng-template #hUpdate>\n              <h3>{{ \"Update Marksheet\" | translate }}</h3>\n            </ng-template>\n          </div>\n          <div\n            class=\"col-4\"\n            *ngIf=\"form.error && form.message != null\"\n            class=\"alert alert-danger\"\n          >\n            {{ form.message }}\n          </div>\n          <div\n            class=\"col-4\"\n            *ngIf=\"!form.error && form.message != null\"\n            class=\"alert alert-success\"\n          >\n            {{ form.message }}\n          </div>\n          <form>\n            <div class=\"form-group row\">\n              <label for=\"collegeId\" class=\"form-check-label\"\n                >{{ \"Student\" | translate }} :<span class=\"text-danger\">*</span>\n              </label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-university grey-text\"></i>\n                  </div>\n                </div>\n                <select\n                  class=\"form-control\"\n                  *ngIf=\"form.preload.studentList != null\"\n                  name=\"studentId\"\n                  [(ngModel)]=\"form.data.studentId\"\n                  id=\"studentId\"\n                >\n                  <option [value]=\"default\" [disabled]=\"true\" selected disabled>\n                    Select Student Name\n                  </option>\n                  <option\n                    *ngFor=\"let opt of form.preload.studentList\"\n                    [value]=\"opt.id\"\n                  >\n                    {{ opt.firstName + \" \" + opt.lastName }}\n                  </option>\n                </select>\n              </div>\n\n              <span class=\"text-danger mr-auto mb-auto\" id=\"collegeId\">\n                {{ form.inputerror.collegeId }}\n              </span>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"rollNo\" class=\"form-check-label\"\n                >{{ \"Roll Number\" | translate }}:\n                <span class=\"text-danger\">*</span></label\n              >\n\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-user grey-text\"></i>\n                  </div>\n                </div>\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"form.data.rollNo\"\n                  name=\"rollNo\"\n                  class=\"form-control\"\n                  placeholder=\"{{ 'Enter Roll Number' | translate }}\"\n                  id=\"rollNo\"\n                  [value]=\"form.data.rollNo\"\n                />\n              </div>\n              <span class=\"text-danger mr-auto mb-auto\">\n                {{ form.inputerror.rollNo }}\n              </span>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"physics\" class=\"form-check-label\"\n                >{{ \"Physics Marks\" | translate }}:\n                <span class=\"text-danger\">*</span>\n              </label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-user-o grey-text\"></i>\n                  </div>\n                </div>\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"form.data.physics\"\n                  name=\"physics\"\n                  class=\"form-control\"\n                  placeholder=\"{{ 'Enter Physics Marks' | translate }}\"\n                  id=\"physics\"\n                />\n              </div>\n\n              <span class=\"text-danger mr-auto mb-auto\">\n                {{ form.inputerror.physics }}\n              </span>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"chemistry\" class=\"form-check-label\"\n                >{{ \"Chemistry Marks\" | translate }}:\n                <span class=\"text-danger\">*</span>\n              </label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-user-o grey-text\"></i>\n                  </div>\n                </div>\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"form.data.chemistry\"\n                  name=\"chemistry\"\n                  class=\"form-control\"\n                  placeholder=\"{{ 'Enter Chemistry Marks' | translate }}\"\n                  id=\"chemistry\"\n                />\n              </div>\n\n              <span class=\"text-danger mr-auto mb-auto\">\n                {{ form.inputerror.chemistry }}\n              </span>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"maths\" class=\"form-check-label\"\n                >{{ \"Maths Marks\" | translate }}:\n                <span class=\"text-danger\">*</span>\n              </label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\">\n                    <i class=\"fa fa-user-o grey-text\"></i>\n                  </div>\n                </div>\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"form.data.maths\"\n                  name=\"maths\"\n                  class=\"form-control\"\n                  placeholder=\"{{ 'Enter Maths Marks' | translate }}\"\n                  id=\"maths\"\n                />\n              </div>\n\n              <span class=\"text-danger mr-auto mb-auto\">\n                {{ form.inputerror.maths }}\n              </span>\n            </div>\n\n            <div class=\"form-inline\">\n              <div class=\"col-4\"></div>\n              <div class=\"text-center\">\n                <div *ngIf=\"form.data.id > 0; then update; else add\"></div>\n                <ng-template #add>\n                  <button (click)=\"submit()\" class=\"btn btn-success\">\n                    {{ \"Save\" | translate }}</button\n                  >&nbsp;\n                  <input\n                    type=\"reset\"\n                    class=\"btn btn-secondary\"\n                    (click)=\"reset()\"\n                  />\n                </ng-template>\n                <ng-template #update>\n                  <button (click)=\"submit()\" class=\"btn btn-success\">\n                    {{ \"Update\" | translate }}</button\n                  >&nbsp;\n                  <button (click)=\"cancel()\" class=\"btn btn-secondary\">\n                    {{ \"Cancel\" | translate }}\n                  </button>\n                </ng-template>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\"></div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div *ngIf=\"checkLogin()\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"/ORSUI\"> <img class=\"image-responsive \" src=\"./assets/logo.png\" height=\"30px\"></a>\n        <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <select #local (change)='changeLocale(local.value)' class=\"bg-secondary text-light\">\n                <option value=\"en\">Englist</option>\n                <option value=\"hi\">{{'Hindi'}}</option>\n            </select>\n            <ul class=\"navbar-nav mr-auto\">\n\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        User\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a routerLink='/user' class=\"dropdown-item\"> <i class=\"fa fa-user-plus\"></i> Add User</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Role\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        College\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Student\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n\n\n\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Course\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n\n\n\n\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Subject\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n\n\n\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Marksheet\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n\n\n\n\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Faculty\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n\n\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Timetable\n                    </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n            </ul>\n\n        </div>\n    </nav>\n\n</div>\n\n-->\n\n<!--LOG IN START-->\n\n<div *ngIf=\"checkLogin()\">\n\n    <nav class=\"navbar navbar-expand-lg bg-secondary navbar-secondary \">\n\n        <a class=\"navbar-brand\" href=\"/ORS\"><img class=\"image-responsive\" src='./assets/logo.png' height=\"30px\"></a>\n\n        <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse bg-secondary \" id=\"navbarNav\">\n            <select #locale (change)='changeLocale(locale.value)' class=\"bg-secondary text-light\">\n                <option class=\"text-light\" value=\"en\">English</option>\n                <option class=\"text-light\" value=\"hi\">{{'Hindi' | translate }}</option>\n            </select>\n\n            <ul class=\"nav navbar-nav \" style=\"list-style-type: none;\">\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n\n                    <button type=\"button\" class=\"btn btn-secondary  dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'User'|translate}}</button>\n\n                    <div class=\"dropdown-menu\">\n\n\n                        <a routerLink=\"/user\" class=\"dropdown-item\"><i class=\"fa fa-user-plus\"></i> {{'Add\n                            User'|translate}}</a>\n                        <a routerLink=\"/userlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'User\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'Role'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/role\" class=\"dropdown-item\"><i class=\"fa fa-user-circle\"></i>{{'Add\n                            Role'|translate}}</a>\n                        <a routerLink=\"/rolelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Role\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'College'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/college\" class=\"dropdown-item\"><i class=\"fa fa-university\"></i> {{'Add\n                            College'|translate}}</a>\n                        <a routerLink=\"/collegelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'College\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'Student'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/student\" class=\"dropdown-item\"><i class=\"fa fa-users\"></i> {{'Add\n                            Student'|translate}}</a>\n                        <a routerLink=\"/studentlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Student\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'Course'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/course\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add\n                            Course'|translate}}</a>\n                        <a routerLink=\"/courselist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Course\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\" nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'Subject'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/subject\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add\n                            Subject'|translate}}</a>\n                        <a routerLink=\"/subjectlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Subject\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'Marksheet'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/marksheet\" class=\"dropdown-item\"><i class=\"fa fa-plus\"></i> {{'Add\n                            Marksheet'|translate}}</a>\n                        <a routerLink=\"/marksheetlist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Marksheet\n                            List'|translate}}</a>\n                        <a routerLink=\"/meritlist\" class=\"dropdown-item\"><i class=\"fa fa-list-ol\"></i> {{'Merit\n                            List'|translate}}</a>\n                        <a routerLink=\"/getmarksheet\" class=\"dropdown-item\"><i class=\"fa fa-id-card-o\"></i> {{'Get\n                            Marksheet'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'Faculty'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/faculty\" class=\"dropdown-item\"><i class=\"fa fa-user-circle\"></i> {{'Add\n                            Faculty'|translate}}</a>\n                        <a routerLink=\"/facultylist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'Faculty\n                            List'|translate}}</a>\n                    </div>\n                </li>\n\n                <li class=\"nav-item dropdown\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                        data-toggle=\"dropdown\">{{'TimeTable'|translate}}</button>\n                    <div class=\"dropdown-menu\">\n                        <a routerLink=\"/TimeTable\" class=\"dropdown-item\"><i class=\"fa fa-clock-o\"></i> {{'Add\n                            TimeTable'|translate}}</a>\n                        <a routerLink=\"/timetablelist\" class=\"dropdown-item\"><i class=\"fa fa-list\"></i> {{'TimeTable\n                            List'|translate}}</a>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav ml-auto\" style=\"list-style-type: none;\">\n                <li class=\"nav-item dropdown ml-auto \" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle ml-auto\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-user-circle\" style=\"font-size: 19px;\"> </i> {{firstname}}\n                        ({{rolename}})</button>\n                    <div class=\"dropdown-menu dropdown-menu-right  ml-auto\">\n                        <a class=\"dropdown-item \" routerLink=\"/myprofile\"><i class=\"fa fa-user\"></i> {{'My Profile' |\n                            translate}}</a>\n                        <a class=\"dropdown-item \" routerLink=\"/changepassword\"><i class=\"fa fa-key\"></i> {{'Change\n                            Password' |\n                            translate}}</a>\n                        <a class=\"dropdown-item \" (click)=\"logout();\"><i class=\"fa fa-sign-out\"></i> {{'Sign Out' |\n                            translate}}</a>\n                    </div>\n                </li>\n\n            </ul>\n        </div>\n    </nav>\n</div>\n\n<!--LOG IN END-->\n\n<!--LOG OUT START-->\n\n<div *ngIf=\"!checkLogin();\">\n    <nav class=\"navbar navbar-expand-lg bg-secondary navbar-secondary \">\n\n        <a class=\"navbar-brand\" href=\"/ORS\"><img class=\"image-responsive\" src='./assets/logo.png' height=\"30px\"></a>\n\n        <button class=\"navbar-toggler navbar-light \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse bg-secondary \" id=\"navbarNav\">\n            <select #locale (change)='changeLocale(locale.value)' class=\"bg-secondary text-light\">\n                <option class=\"text-light\" value=\"en\">English</option>\n                <option class=\"text-light\" value=\"hi\">{{'Hindi' | translate }}</option>\n            </select>\n            <ul class=\"nav navbar-nav ml-auto\" style=\"list-style-type: none;\">\n                <li class=\"nav-item dropdown ml-auto\" style=\"list-style-type: none;\">\n                    <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\"><i\n                            class=\"fa fa-user-circle\" style=\"font-size: 19px;\"> </i> {{'Hi,Guest' | translate}}</button>\n                    <div class=\"dropdown-menu dropdown-menu-right ml-auto\">\n\n                        <a class=\"dropdown-item\" routerLink=\"/login\"><i class=\"fa fa-sign-in\"></i> &nbsp;{{'Log In' | translate}}</a>\n                        <a class=\"dropdown-item\" routerLink=\"/signup\"><i class=\"fa fa-users\"></i> &nbsp;{{'User Registration' |\n                            translate}}</a>\n                    </div>\n                <li>\n            </ul>\n        </div>\n    </nav>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(../../assets/list.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 text-center\" style=\"margin-top: 15%;\">\n            <h1 class=\"text-center  alert alert-danger\" >{{'Page Not Found'|translate}},<br> {{'Enter valid\n                URL'|translate}}</h1>\n                \n                <button class=\"btn btn-primary \" (click)=\"forward('/dashbord')\" >{{'Back'|translate}}</button>\n    \n            </div>\n        </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/role-list.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/role-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n    <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 850px;bottom: 0%;\">\n        <div class=\"d-flex bg-primary text-white paddin \">\n            <h1 class=\"text-center container-fluid \">{{'Role List'}}</h1>\n        </div>\n        <div class=\"text-center row\">\n            <div class=\"col-3\"></div>\n            <form class=\"form-inline pt-3  \">\n                <div class=\"form-group  pr-3\">\n                    <label for=\"name\" class=\"form-check-label pr-3 \">{{'Name' |translate}} : </label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"{{'Enter Role Name' |translate }}\" name=\"name\"\n                        [(ngModel)]=\"form.searchParams.name\" id=\"name\">\n                </div>\n                <div class=\"form-group pr-3\">\n                    <label for=\"description\" class=\"form-check-label pr-3 \">{{'Description' |translate}} : </label>\n                    <input type=\"text\" class=\"form-control\" name=\"description\" id=\"description\"\n                        placeholder=\" {{'Enter Role Description' |translate }}\" [(ngModel)]=\"form.searchParams.description\">\n                </div>\n                <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search' |translate}}</button>&nbsp;&nbsp;\n                <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset' |translate}}</button>\n            </form>\n        </div>\n        <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\n        <div class=\"col-6 \" *ngIf=\"!form.error && form.message != null && form.message.length()>0\"\n            class=\"alert alert-success\">\n            {{form.message}}</div>\n\n        <br>\n\n\n        <br>\n        <div class=\"p-1\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-striped table-hover\">\n                    <thead class=\"thead-light text-uppercase\">\n                        <tr>\n                            <th>{{'S.No' |translate}}</th>\n                            <th>{{'Name' |translate}}</th>\n                            <th>{{'Description' |translate}}</th>\n                            <th>{{'Edit' |translate}}/{{'Delete' |translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let role of form.list; let i = index\">\n                            <td> {{((form.pageNo-1)*10)+i+1}} </td>\n                            <td> {{ role.name }} </td>\n                            <td> {{ role.description }} </td>\n                            <td>\n                                <div *ngIf=\"role.id==1;then read else write\"></div>\n                                <ng-template #read><i class=\"fa fa-edit\" style=\"font-size:20px;color:grey\"></i> / <i\n                                        class=\"fa fa-trash-o\" style=\"font-size:20px;color:grey\"></i></ng-template>\n                                <ng-template #write><a (click)=\"forward( '/role/' +  role.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\n                                    </a> / <a (click)=\"delete(role.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                                    </a></ng-template>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n        <div class=\" col-12 form-inline\">\n            <div class=\"col-4 text-left \">\n                <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n                <ng-template #sus>\n                    <button (click)=\"previous()\" class=\"btn btn-success\"> {{ 'previous'|translate }}</button>\n                </ng-template>\n                <ng-template #fail>\n                    <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{ 'previous'|translate }}</button>\n                </ng-template>\n            </div>\n\n            <div class=\"text-center col-4\">\n                <button class=\"btn-primary btn  \" (click)=\"forward('/role/')\">{{'Add' |translate}}</button>\n            </div>\n            <div class=\"col-3 text-right \">\n                <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\n                <ng-template #susN>\n                    <button (click)=\"next()\" class=\"btn btn-success\">{{'next' |translate}}</button>\n                </ng-template>\n                <ng-template #failN>\n                    <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next' |translate}}</button>\n                </ng-template>\n            </div>\n        </div>\n\n        <br><br>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/role.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/role.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \">\n    <div class=\"row ml-3\" style=\" background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5 \">\n\n            <div class=\"card\">\n            \n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Role'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Role'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"form.error && form.message!=null \" class=\"alert alert-danger\">\n                        {{form.message}}</div>\n                    <div class=\"col-sm-4\" *ngIf=\"!form.error && form.message!=null\" class=\"alert alert-success\">\n                        {{form.message}}</div>\n                    <form>\n\n                        <div class=\"form-group row\">\n                            <label for=\"rName\" class=\"form-check-label\">{{'Role Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.name\" name=\"name\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Role Name' |translate}}\" id=\"rName\" [value]=\"form.data.firstName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.name}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"description\" class=\"form-check-label\">{{'Role Description'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.description\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Role Description' |translate }}\" id=\"description\"\n                                    [value]=\"form.data.description\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.description}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"justify-content-center text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                   \n                                        <input type=\"reset\" class=\"btn btn-secondary\" (click)=\"reset()\">\n                            \n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/student-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/student-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;width:100%;\n      height: 850px;bottom: 0%;\">\n    <div class=\"d-flex bg-primary text-white paddin \">\n      <h1 class=\"text-center container-fluid \">{{'Student List' |translate}}</h1>\n    </div>\n\n    <div class=\"text-center row\">\n      <div class=\"col-2\"></div>\n      <form class=\"form-inline pt-3 mr-3\">\n        <div class=\"form-group  pr-3\">\n          <label for=\"fName\" class=\"form-check-label pr-3\">{{'First Name' |translate}} : </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\" {{ 'Enter First Name'|translate }}\" name=\"firstName\"\n            [(ngModel)]=\"form.searchParams.firstName\" id=\"fName\">\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"email\" class=\"form-check-label pr-3 \">{{'Email Id' |translate}} : </label>\n          <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\"\n            placeholder=\"{{ 'Enter Last Name' |translate}}\" [(ngModel)]=\"form.searchParams.email\">\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"collegeId\" class=\"form-check-label pr-3\">{{'College' |translate}} :</label>&nbsp;\n          <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.searchParams.collegeId\" id=\"role\">\n            <option [value]=default [disabled]=\"true\" selected disabled>Select College</option>\n          \n<!--            <option [value]=\"default\" [disabled]=\"true\" selected disabled>Select Role</option>\n    -->      \n            <option *ngFor=\"let opt of form.preload.list\" [value]=\"opt.key\">{{opt.value}}</option>\n          </select>\n        </div>\n        <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search' |translate}}</button>&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset' |translate}}</button>\n      </form>\n    </div>\n    <br>\n    <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\n    <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\n      {{form.message}}</div>\n\n    <br>\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{'S.No' |translate}}</th>\n              <th>{{'First Name' |translate}}</th>\n              <th>{{'Last Name' |translate}}</th>\n              <th>{{'Email' |translate}}</th>\n              <th>{{'College' |translate}}</th>\n              <th>{{'Phone' |translate}}</th>\n              <th>{{'DOB' |translate}}</th>\n              <th>{{'Edit' |translate}} / {{'Delete' |translate}}</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let student of form.list; let i = index\">\n              <td> {{((form.pageNo-1)*10)+i+1}} </td>\n              <td> {{ student.firstName }} </td>\n              <td> {{ student.lastName }} </td>\n              <td> {{ student.email }} </td>\n              <td> {{ student.collegeName }} </td>\n              <td> {{ student.mobileNo }} </td>\n              <td> {{ student.dob | date : 'dd-MM-yyyy'}} </td>\n              <td>\n                <a (click)=\"forward( '/student/' +  student.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\n                </a> / <a (click)=\"delete(student.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\" col-12 form-inline mb-0  \">\n          <div class=\"col-4 text-left \">\n            <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n            <ng-template #sus>\n              <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous' |translate}}</button>\n            </ng-template>\n            <ng-template #fail>\n              <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous' |translate}}</button>\n            </ng-template>\n          </div>\n          <div class=\"col-4 text-center \">\n            <button class=\"btn-primary btn \" (click)=\"forward('/student/')\">{{'Add' |translate}}</button>\n          </div>\n          <div class=\"col-4 text-right \">\n            <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\n            <ng-template #susN>\n              <button (click)=\"next()\" class=\"btn btn-success\">{{'next' |translate}}</button>\n            </ng-template>\n            <ng-template #failN>\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next' |translate}}</button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br><br>\n  </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/student.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\" row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 750px;bottom: 0%;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h3>{{'Add Student'|translate}}</h3>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h3>{{'Update Student'|translate}}</h3>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row \">\n                            <label for=\"collegeName\" class=\"form-check-label\"> {{'College'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                                </div>\n\n                                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                                    id=\"collegeId\">\n\n\n                                    <option [value]=default [disabled]=\"true\" selected disabled>Select Student College\n                                    </option>\n\n                                    <option *ngFor=\"let opt of form.preload.list\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"collegeId\"> {{form.inputerror.collegeId}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name' |translate}}\" id=\"fName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name' |translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile Number' |translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"email\" class=\"form-check-label\">{{'Email'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then lUpdate else lAdd\"></div>\n\n                                <ng-template #lUpdate>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\" class=\"form-control\"\n                                        placeholder=\"Enter Email\" id=\"login\" disabled>\n                                </ng-template>\n                                <ng-template #lAdd><input type=\"text\" [(ngModel)]=\"form.data.email\" name=\"email\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email' |translate}}\" id=\"email\">\n                                </ng-template>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.email}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" name=\"{{'Reset'|translate}}\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subject/subject-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subject/subject-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n  <div class=\"content-wrapper\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;width:100%;\n      height: 850px;bottom: 0%;\">\n    <div class=\"d-flex bg-primary text-white paddin \">\n      <h1 class=\"text-center container-fluid \">{{'Subject List' |translate}}</h1>\n    </div>\n    <div class=\"text-center row\">\n      <div class=\"col-2\"></div>\n      <form class=\"form-inline pt-3  \">\n        <div class=\"form-group  pr-3\">\n          <label for=\"subjectName\" class=\"form-check-label pr-3 \">{{'Subject Name' |translate}} : </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\" {{ 'Enter Subject Name' |translate }}\" name=\"subjectName\"\n            [(ngModel)]=\"form.searchParams.subjectName\" id=\"fName\">\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"courseId\" class=\"form-check-label pr-3\">{{'Course' |translate}} :</label>&nbsp;\n          <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.searchParams.courseId\" id=\"courseId\">\n            <option [value]=0 [disabled]=\"true\" selected disabled>Select Course</option>\n            <option *ngFor=\"let opt of form.preload.list\" [value]=\"opt.key\">{{opt.value}}</option>\n          </select>\n        </div>\n        <button class=\"btn-primary btn\" (click)=\"submit()\">{{'Search' |translate}}</button>&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">{{'Reset' |translate}}</button>\n      </form>\n    </div>\n    <br>\n    <div class=\"col-6  \" *ngIf=\"form.error\" class=\"alert alert-danger\"> {{form.message}}</div>\n    <div class=\"col-6 \" *ngIf=\"!form.error && (form.message != null)\" class=\"alert alert-success\">\n      {{form.message}}</div>\n\n    <br>\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{'S.No' |translate}}</th>\n              <th>{{'Name' |translate}}</th>\n              <th>{{'Description' |translate}}</th>\n              <th>{{'Course Name' |translate}}</th>\n              <th>{{'Edit' |translate}} / {{'Delete' |translate}}</th>\n            </tr>\n          </thead>\n\n\n         \n          <tbody>\n            <tr *ngFor=\"let subject of form.list; let i = index\">\n           \n\n              <td> {{((form.pageNo-1)*10)+i+1}} </td>\n\n             \n\n              <td> {{ subject.subjectName }} </td>\n              <td> {{ subject.subjectDescription }} </td>\n              <td> {{ subject.courseName }} </td>\n              <td>\n                <a (click)=\"forward( '/subject/' +  subject.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-edit\" style=\"font-size:20px;color:blue\"></i>\n                </a> / <a (click)=\"delete(subject.id)\" style=\"cursor: pointer;\">\n                  <i class=\"fa fa-trash-o\" style=\"font-size:20px;color:red\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\" col-12 form-inline mb-0  \">\n          <div class=\"col-4 text-left \">\n            <div *ngIf=\"form.pageNo>1; then sus else fail\"></div>\n            <ng-template #sus>\n              <button (click)=\"previous()\" class=\"btn btn-success\">{{'previous' |translate }}</button>\n            </ng-template>\n            <ng-template #fail>\n              <button (click)=\"previous()\" disabled class=\"btn btn-light \">{{'previous' |translate}}</button>\n            </ng-template>\n          </div>\n          <div class=\"col-4 text-center \">\n            <button class=\"btn-primary btn \" (click)=\"forward('/subject/')\">{{'Add' |translate}}</button>\n          </div>\n          <div class=\"col-4 text-right \">\n            <div *ngIf=\"form.count>(form.pageSize*form.pageNo);then susN else failN\"></div>\n            <ng-template #susN>\n              <button (click)=\"next()\" class=\"btn btn-success\">{{'next' |translate}}</button>\n            </ng-template>\n            <ng-template #failN>\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">{{'next' |translate}}</button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br><br>\n  </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subject/subject.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subject/subject.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row \">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{'Add Subject'|translate}}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update Subject'|translate}}</h1>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row \">\n                            <label for=\"courseId\" class=\"form-check-label \">{{'Course Name'|translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\n                                    id=\"courseId\">\n                                    <option value=\"default\" [disabled]=\"true\" selected disabled>Select Course Name\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.list\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"courseId\"> {{form.inputerror.courseId}}\n                            </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"subjectName\" class=\"form-check-label\">{{'Subject Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.subjectName\" name=\"subjectName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Subject Name' |translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.subjectName}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"subjectDescription\" class=\"form-check-label\">{{'Description'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.subjectDescription\" name=\"subjectDescription\"\n                                    class=\"form-control\" placeholder=\" {{'Enter Subject Description'|translate}}\"\n                                    id=\"subjectDescription\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.subjectDescription}} </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\"\n                                        class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel'|translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-3\"></div>\n    </div>\n    <br>\n    <br>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timetable/time-table-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timetable/time-table-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid text-center\">\n  <div\n    class=\"content-wrapper\"\n    style=\"\n      padding-top: 0%;\n      background-image: url(./assets/list.jpg);\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;\n      width: 100%;\n      height: 850px;\n      bottom: 0%;\n    \"\n  >\n    <div class=\"d-flex bg-primary text-white paddin\">\n      <h1 class=\"text-center container-fluid\">\n        {{ \"TimeTable List\" | translate }}\n      </h1>\n    </div>\n\n    <div class=\"text-center row\">\n      <div class=\"col-2\"></div>\n      <form class=\"form-inline pt-3 mr-3\">\n        <div class=\"form-group pr-3\">\n          <label for=\"fName\" class=\"form-check-label pr-3\"\n            >{{ \"Semester\" | translate }} :\n          </label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\" {{ 'Enter First Name' | translate }}\"\n            name=\"semester\"\n            [(ngModel)]=\"form.searchParams.semester\"\n            id=\"fName\"\n          />\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"course\" class=\"form-check-label pr-3\"\n            >{{ \"Subject\" | translate }} :\n          </label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"subject\"\n            id=\"subject\"\n            placeholder=\"{{ 'Enter Subject Name' | translate }}\"\n            [(ngModel)]=\"form.searchParams.subjectName\"\n          />\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"course\" class=\"form-check-label pr-3\"\n            >{{ \"Course\" | translate }} :</label\n          >&nbsp;\n          <select\n            class=\"form-control\"\n            name=\"courseId\"\n            [(ngModel)]=\"form.searchParams.courseId\"\n            id=\"course\"\n          >\n            <option [value]=\"default\" [disabled]=\"true\" selected disabled>\n              Select Course\n            </option>\n\n            <!--            <option [value]=\"default\" [disabled]=\"true\" selected disabled>Select Role</option>\n      -->\n            <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.key\">\n              {{ opt.value }}\n            </option>\n          </select>\n        </div>\n        <button class=\"btn-primary btn\" (click)=\"submit()\">\n          {{ \"Search\" | translate }}</button\n        >&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">\n          {{ \"Reset\" | translate }}\n        </button>\n      </form>\n    </div>\n    <br />\n    <div class=\"col-6\" *ngIf=\"form.error\" class=\"alert alert-danger\">\n      {{ form.message }}\n    </div>\n    <div\n      class=\"col-6\"\n      *ngIf=\"!form.error && form.message != null\"\n      class=\"alert alert-success\"\n    >\n      {{ form.message }}\n    </div>\n\n    <br />\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{ \"S.No\" | translate }}</th>\n              <th>{{ \"Semester\" | translate }}</th>\n              <th>{{ \"Course\" | translate }}</th>\n              <th>{{ \"Subject\" | translate }}</th>\n              <th>{{ \"ExamDate\" | translate }}</th>\n              <th>{{ \"ExamTime\" | translate }}</th>\n\n              <th>{{ \"Edit\" | translate }} / {{ \"Delete\" | translate }}</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let timetable of form.list; let i = index\">\n              <td>{{ (form.pageNo - 1) * 10 + i + 1 }}</td>\n              <td>{{ timetable.semester }}</td>\n              <td>{{ timetable.courseName }}</td>\n              <td>{{ timetable.subjectName }}</td>\n              <td>{{ timetable.examDate }}</td>\n              <td>{{ timetable.examTime }}</td>\n\n              <td>\n                <a\n                  (click)=\"forward('/timetable/' + timetable.id)\"\n                  style=\"cursor: pointer\"\n                >\n                  <i\n                    class=\"fa fa-edit\"\n                    style=\"font-size: 20px; color: blue\"\n                  ></i>\n                </a>\n                /\n                <a (click)=\"delete(timetable.id)\" style=\"cursor: pointer\">\n                  <i\n                    class=\"fa fa-trash-o\"\n                    style=\"font-size: 20px; color: red\"\n                  ></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"col-12 form-inline mb-0\">\n          <div class=\"col-4 text-left\">\n            <div *ngIf=\"form.pageNo > 1; then sus; else fail\"></div>\n            <ng-template #sus>\n              <button (click)=\"previous()\" class=\"btn btn-success\">\n                {{ \"previous\" | translate }}\n              </button>\n            </ng-template>\n            <ng-template #fail>\n              <button (click)=\"previous()\" disabled class=\"btn btn-light\">\n                {{ \"previous\" | translate }}\n              </button>\n            </ng-template>\n          </div>\n          <div class=\"col-4 text-center\">\n            <button class=\"btn-primary btn\" (click)=\"forward('/student/')\">\n              {{ \"Add\" | translate }}\n            </button>\n          </div>\n          <div class=\"col-4 text-right\">\n            <div\n              *ngIf=\"\n                form.count > form.pageSize * form.pageNo;\n                then susN;\n                else failN\n              \"\n            ></div>\n            <ng-template #susN>\n              <button (click)=\"next()\" class=\"btn btn-success\">\n                {{ \"next\" | translate }}\n              </button>\n            </ng-template>\n            <ng-template #failN>\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">\n                {{ \"next\" | translate }}\n              </button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br /><br />\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timetable/timetable.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timetable/timetable.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3 \" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\"form.data.id>0; then hUpdate else hAdd\"></div>\n                        <ng-template #hAdd>\n                            <h1>{{\"Add TimeTable\" | translate }}</h1>\n                        </ng-template>\n                        <ng-template #hUpdate>\n                            <h1>{{'Update TimeTable'}}</h1>\n                        </ng-template>\n                    </div>\n                  \n                    <div class=\"col-sm-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n\n                    <form>\n\n                        <div class=\"form-group row \">\n                            <label for=\"courseId\" class=\"form-check-label \">{{'Course Name' | translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.courseList!=null\" name=\"courseId\"\n                                    [(ngModel)]=\"form.data.courseId\" id=\"collegeId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Course\n                                        Name'}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.courseList\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"courseId\"> {{form.inputerror.courseName}}\n                            </span>\n                        </div>\n\n\n                        <div class=\"form-group row \">\n                            <label for=\"subjectId\" class=\"form-check-label \">{{'Subject Name' | translate}} :<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-book grey-text\"></i> </div>\n                                </div>\n                                <select class=\"form-control\" *ngIf=\"form.preload.subjectList!=null\" name=\"subjectId\"\n                                    [(ngModel)]=\"form.data.subjectId\" id=\"subjectId\">\n                                    <option [value]=default [disabled]=\"true\" selected disabled>{{'Select Subject\n                                        Name'}}\n                                    </option>\n                                    <option *ngFor=\"let opt of form.preload.subjectList\" [value]=\"opt.key\">{{opt.value}}\n                                    </option>\n                                </select>\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto \" id=\"subjectId\"> {{form.inputerror.subjectName}}\n                            </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"semester\" class=\"form-check-label\">{{'Semester' | translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.semester\" name=\"semester\" class=\"form-control\"\n                                    id=\"semester\">\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>Select Semester\n                                    </option>\n                                    <option [value]=\"I\">I</option>\n                                    <option [value]=\"II\">II</option>\n                                    <option [value]=\"III\">III</option>\n                                    <option [value]=\"IV\">IV</option>\n                                    <option [value]=\"V\">V</option>\n                                    <option [value]=\"VI\">VI</option>\n                                    <option [value]=\"VII\">VII</option>\n                                    <option [value]=\"VIII\">VIII</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.semester}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Exam Date ' | translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"examDate\" [(ngModel)]=\"form.data.examDate\"\n                                    class=\"form-control\" placeholder=\"Enter Date of Exam\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.examDate}}</span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"examTime\" class=\"form-check-label\">{{'Exam Time' | translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.examTime\" name=\"examTime\" class=\"form-control\"\n                                    id=\"examTime\">\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>Select Exam Time</option>\n                                    <option value=\"10:00 am to 01:00 pm\">10:00 am to 01:00 pm</option>\n                                    <option value=\"01:00 pm to 04:00 pm\">01:00 pm to 04:00 pm</option>\n                                    <option value=\"04:00 pm to 07:00 pm\">04:00 pm to 07:00 pm</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.examTime}} </span>\n                        </div>\n\n                        <div class=\"form-inline\">\n                            <div class=\"col-sm-4\"></div>\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id>0; then update else add\"></div>\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save' | translate}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" name=\"{{'Reset'}}\" (click)=\"reset()\">\n                                </ng-template>\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Update' | translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\">{{'Cancel' | translate}}</button>\n                                </ng-template>\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/change-password.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/change-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\" container-fluid row\">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 700px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4 pt-5\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <h1>{{'Change Password'|translate}}</h1>\n\n                        <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                            {{form.message}}\n                        </div>\n                        <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                            {{form.message}}\n                        </div>\n                        <form>\n                            <div class=\"form-group row\">\n                                <label for=\"password\" class=\"form-check-label\">{{'Old Password'|translate}}:\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                    </div>\n                                    <input type=\"password\" [(ngModel)]=\"form.data.oldPassword\" name=\"oldPassword\"\n                                        class=\"form-control\" placeholder=\"Enter Old Password\" id=\"oldPassword\">\n                                </div>\n\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.oldPassword}} </span>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                    </div>\n                                    <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                        class=\"form-control\" placeholder=\"Enter Password\" id=\"password\">\n                                </div>\n\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"confirmPassword\" class=\"form-check-label\">Confirm Password:\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                    </div>\n                                    <input type=\"password\" [(ngModel)]=\"form.data.confirmPassword\"\n                                        name=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\"\n                                        id=\"confirmPassword\">\n                                </div>\n\n                                <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.confirmPassword}} </span>\n                            </div>\n                            <div class=\"form-inline\">\n                                <div class=\"col-4\"></div>\n                                <div class=\"text-center\">\n                                    \n                                    <button (click)=\"submit()\" class=\"btn btn-success \">{{'Save'|translate}}</button>&nbsp;\n                                    <button class=\"btn btn-primary  \" (click)=\"this.forward('myprofile')\">{{'My\n                                        Profile'|translate}}</button>\n                                </div>\n                            </div>\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/my-profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/my-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row\">\n    <div class=\"row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/form.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;width:100%;\n    height: 900px;\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <h1 class=\"text-dark\">{{'My Profile'|translate}}</h1>\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"form.error && form.message!=null\" class=\"alert alert-danger\">\n                        {{form.message}}\n                    </div>\n                    <div class=\"col-4\" *ngIf=\"!form.error && form.message!=null\" class=\" alert alert-success\">\n                        {{form.message}}\n                    </div>\n                    <form>\n                        <div class=\"form-group row \">\n                            <div *ngIf=\"form.data.picName\">\n                                <img src=\"http://localhost:8081/User/getPic/{{form.data.id}}\" height=\"55px\"\n                                    width=\"80px\" style=\"align-items: center;\">\n                            </div>\n                            <div *ngIf=\"!form.data.picName\">\n                                <img src=\"../../assets/default.jpg\" height=\"55px\" width=\"80px\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"picture\" class=\"form-check-label\">{{'Profile Picture'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"file\" (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\"\n                                    name=\"pic\" class=\"form-control\" placeholder=\"{{'Select Picture'|translate}}\"\n                                    id=\"pic\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.picture}}\n                            </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"fName\" class=\"form-check-label\">{{'First Name'|translate}}:\n                                <span class=\"text-danger\">*</span></label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" name=\"firstName\"\n                                    class=\"form-control\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\n                                    [value]=\"form.data.firstName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto  \"> {{form.inputerror.firstName}}\n                            </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"lName\" class=\"form-check-label\">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.lastName\" name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"mNo\" class=\"form-check-label\">{{'Mobile No'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile Number'|translate}}\" id=\"mNo\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.mobileNo}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"login\" class=\"form-check-label\">{{'Login'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\" id=\"gender\">\n                                    <option [value]=\"null\" [disabled]=\"true\" selected disabled>Select Gender</option>\n                                    <option [value]=\"Male\">Male</option>\n                                    <option [value]=\"Female\">Female</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\n                        </div>\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth'|translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n                        <div class=\"form-inline\">\n                            <div class=\"col-3\"></div>\n                            <div class=\"text-center\">\n                                <button (click)=\"submit()\"\n                                    class=\"btn btn-success \">{{'Update'|translate}}</button>&nbsp;\n                                <button (click)=\"this.forward(changepassword)\" class=\"btn btn-secondary\">{{'Change\n                                    Password'|translate}}</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-list.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid\">\n  <div\n    class=\"\"\n    style=\"\n      padding-top: 0%;\n      background-image: url(./assets/list.jpg);\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size: cover;\n      width: 100%;\n      height: 610px;\n      bottom: 0%;\n    \"\n  >\n    <div class=\"d-flex bg-primary text-white paddin\">\n      <h1 class=\"text-center container-fluid\">{{ \"User List\" | translate }}</h1>\n    </div>\n    <div class=\"text-center row\">\n      <div class=\"col-2\"></div>\n\n      <form class=\"form-inline pt-3 mr-3\">\n        <div class=\"form-group pr-3\">\n          <label for=\"fname\" class=\"form-check-label pr-3\">\n            {{ \"First Name\" | translate }} :</label\n          >\n\n          <input\n            type=\"text \"\n            class=\"form-control\"\n            placeholder=\"{{ 'Enter First Name' | translate }}\"\n            name=\"firstname\"\n            [(ngModel)]=\"form.searchParams.firstName\"\n            id=\"fName\"\n          />\n        </div>\n        <div class=\"form-group pr-3\">\n          <label for=\"lName\" class=\"form-check-lable pr-3\">\n            {{ \"Login Id\" }}:</label\n          >\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"login\"\n            id=\"lname\"\n            placeholder=\"{{ 'Login ID' | translate }}\"\n            [(ngModel)]=\"form.searchParams.login\"\n          />\n        </div>\n\n        <div class=\"form-group pr-3\">\n          <label for=\"role\" class=\"form-check-label pr-3\">\n            {{ \"Role\" | translate }}:</label\n          >&nbsp;\n\n          <select\n            class=\"form-control\"\n            name=\"roleId\"\n            [(ngModel)]=\"form.searchParams.roleId\"\n            id=\"role\"\n          >\n            <option [value]=\"default\" [disabled]=\"true\" selected disabled>\n              Select Role\n            </option>\n\n            <option *ngFor=\"let opt of form.preload.list\" [value]=\"opt.id\">\n              {{ opt.name }}\n            </option>\n          </select>\n        </div>\n        <button class=\"btn-primary btn\" (click)=\"submit()\">\n          {{ \"Search\" | translate }}</button\n        >&nbsp;&nbsp;\n        <button class=\"btn btn-secondary\" (click)=\"reset()\">\n          {{ \"Reset\" | translate }}\n        </button>\n      </form>\n    </div>\n    <br />\n    <div class=\"col-6\" *ngIf=\"form.error\" class=\"alert alert-danger\">\n      {{ form.message }}\n    </div>\n\n    <div\n      class=\"col-6\"\n      *ngIf=\"!form.error && form.message != null\"\n      class=\"alert alert-success\"\n    >\n      {{ form.message }}\n    </div>\n    <br />\n    <div class=\"p-1\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped table-hover\">\n          <thead class=\"thead-light text-uppercase\">\n            <tr>\n              <th>{{ \"S.No\" | translate }}</th>\n              <th>{{ \"Image\" | translate }}</th>\n              <th>{{ \"First Name\" | translate }}</th>\n              <th>{{ \"Last Name\" | translate }}</th>\n              <th>{{ \"Login\" | translate }}</th>\n              <th>{{ \"Gender\" | translate }}</th>\n              <th>{{ \"Role\" | translate }}</th>\n              <th>{{ \"Phone\" | translate }}</th>\n              <th>{{ \"DOB\" | translate }}</th>\n              <th>{{ \"Edit\" | translate }} /{{ \"Delete\" | translate }}</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let user of form.list; let i = index\">\n              <td>{{ (form.pageNo - 1) * 10 + i + 1 }}</td>\n              <td>\n                <div *ngIf=\"user.picName\">\n                  <img\n                    src=\"http://localhost:8081/User/getPic/{{ user.id }}\"\n                    height=\"30x\"\n                    width=\"40px\"\n                  />\n                </div>\n                <div *ngIf=\"!user.picName\">\n                  <img src=\"./assets/default.jpg\" height=\"30px\" width=\"40px\" />\n                </div>\n              </td>\n              <td>{{ user.firstName }}</td>\n              <td>{{ user.lastName }}</td>\n              <td>{{ user.login }}</td>\n              <td>{{ user.gender }}</td>\n              <td>\n                <div *ngIf=\"user.roleId == 1; then admin\"></div>\n                <div *ngIf=\"user.roleId == 2; then student\"></div>\n                <div *ngIf=\"user.roleId == 3; then Faculty\"></div>\n                <div *ngIf=\"user.roleId == 4; then Kiosk\"></div>\n\n                <ng-template #admin> Admin </ng-template>\n                <ng-template #student> Student </ng-template>\n\n                <ng-template #Faculty> Faculty </ng-template>\n\n                <ng-template #Kiosk> Kiosk </ng-template>\n              </td>\n              <td>{{ user.mobileNo }}</td>\n              <td>{{ user.dob | date: \"dd-MM-yyyy\" }}</td>\n              <td>\n                <div *ngIf=\"user.roleId == 1; then adminn; else write\"></div>\n                <ng-template #adminn>\n                  <i\n                    class=\"fa fa-edit\"\n                    style=\"font-size: 20px; color: blue\"\n                  ></i>\n                  /\n                  <i\n                    class=\"fa fa-trash-o\"\n                    style=\"font-size: 20px; color: red\"\n                  ></i>\n                </ng-template>\n                <ng-template #write\n                  ><a\n                    (click)=\"forward('/user/' + user.id)\"\n                    style=\"cursor: pointer\"\n                  >\n                    <i\n                      class=\"fa fa-edit\"\n                      style=\"font-size: 20px; color: blue\"\n                    ></i>\n                  </a>\n                  /\n                  <a (click)=\"delete(user.id)\" style=\"cursor: pointer\">\n                    <i\n                      class=\"fa fa-trash-o\"\n                      style=\"font-size: 20px; color: red\"\n                    ></i>\n                  </a>\n                </ng-template>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"form-inline\">\n          <div class=\"col-4 text-left\">\n            <div *ngIf=\"form.pageNo > 1; then sus; else fail\"></div>\n            <ng-template #sus>\n              <button (click)=\"previous()\" class=\"btn btn-success\">\n                {{ \"previous\" | translate }}\n              </button>\n            </ng-template>\n            <ng-template #fail>\n              <button (click)=\"previous()\" disabled class=\"btn btn-light\">\n                {{ \"previous\" | translate }}\n              </button>\n            </ng-template>\n          </div>\n          <div class=\"col-4 text-center\">\n            <button class=\"btn-primary btn\" (click)=\"forward('/user/')\">\n              {{ \"Add\" | translate }}\n            </button>\n          </div>\n          <div class=\"col-4 text-right\">\n            <div\n              *ngIf=\"\n                form.count > form.pageSize * form.pageNo;\n                then susN;\n                else failN\n              \"\n            ></div>\n            <ng-template #susN>\n              <button (click)=\"next()\" class=\"btn btn-success\">\n                {{ \"next\" | translate }}\n              </button>\n            </ng-template>\n            <ng-template #failN>\n              <button (click)=\"next()\" disabled class=\"btn btn-light\">\n                {{ \"next\" | translate }}\n              </button>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid row \" style=\"border: 0px ;\">\n    <div class=\"row ml-3\"\n        style=\"border:0px; padding-top: 0pt; background-image: url(./assets/form.jpg); background-repeat: no-repeat;background-size:cover; width:100%;height: 1150px;bottom: 0%; background-attachment: fixed\">\n        <div class=\"col-sm-4\"> </div>\n        <div class=\"col-sm-4 pt-5 \">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center mb-4\">\n                        <div *ngIf=\" form.data.id > 0; then hupdate else  hAdd\">\n                        </div>\n                        <ng-template #hAdd>\n                            <h3 class=\" text-dark\">{{'Add User'|translate }}</h3>\n                        </ng-template>\n                        <ng-template #hupdate>\n                            <h3 class=\" text-dark\">{{'Update User'|translate}}</h3>\n                        </ng-template>\n                    </div>\n\n                    <!--\n                    <div *ngIf=\"form.error && form.message!= null; then truee else  falsee\">\n                    </div>\n-->\n\n\n\n                    <!---->\n                    <div class=\" col-sm-4\" *ngIf=\"form.error && form.message!= null\"\n                        class=\"alert alert-danger text-center\">\n                        {{form.message}}\n                    </div>\n\n                    <!---->\n\n\n                    <div class=\" col-sm-4\" *ngIf=\"!form.error && form.message!= null\"\n                        class=\"alert alert-success text-center\">\n\n                        {{form.message}} </div>\n\n                    <form>\n\n                        <div class=\"form-group row\">\n\n                            <label for=\"role\" class=\"form=ckeck-lable\"> {{'Role' |translate}}: <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n\n\n                                <div class=\"input-group-prepend\">\n\n                                    <div class=\"input-group-text\"> <i class=\"fa fa-user-circle grey-text\"></i></div>\n                                </div>\n                                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" id=\"role\">\n\n                                    <option [value]=\"default\" [disabled]=\"true\" selected disabled>Select Role</option>\n\n                                    <option *ngFor=\"let opt of form.preload.list\" [value]=\"opt.id\">\n                                        {{opt.name}}\n                                    </option>\n\n                                </select>\n\n\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\" id=\"role\">{{form.inputerror.roleId}} </span>\n                        </div>\n\n\n                        <div class=\"form=group row\">\n\n                            <label for=\"fName\" class=\"form-ckeck-lable\"> {{'First Name'|translate}}:\n\n                                <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"> <i class=\"fa fa-user grey-text\"></i></div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                                    name=\"firstName\" placeholder=\"{{'Enter First Name'|translate}}\" id=\"fName\"\n                                    [value]=\"form.data.firstName\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.firstName}}</span>\n                        </div>\n\n\n\n\n                        <div class=\"form-group row\">\n\n                            <label for=\"lName\" class=\"form-check-lable \">{{'Last Name'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-user-o grey-text\"></i> </div>\n\n                                </div>\n\n                                <input type=\"text\" [(ngModel)]=form.data.lastName name=\"lastName\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Last Name'|translate}}\" id=\"lName\">\n                            </div>\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.lastName}}</span>\n                        </div>\n\n\n                        <div class=\"form-group row \">\n                            <label for=\"mNo\" class=\"form-check-lable\"> {{'Mobile No'|translate }}:\n                                <span class=\"text-danger\">* </span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"> <i class=\"fa fa-phone grey-text\"></i></div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"form.data.mobileNo\" name=\"mobileNo\" class=\"form-control\"\n                                    placeholder=\"{{'Enter Mobile No'|translate}}\" id=\"mNo\">\n                            </div>\n                            <span class=\"text-danger  mr-auto mb-auto\">{{form.inputerror.mobileNo}} </span>\n                        </div>\n\n\n                        <div class=\"form-group row\">\n\n\n                            <label for=\"login\" class=\"form-check-lable\"> {{'Login'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"> <i class=\"fa fa-envelope grey-text\"></i></div>\n                                </div>\n                                <div *ngIf=\"form.data.id>0; then Update else Add\"></div>\n                                <ng-template #Update>\n                                    <input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\" class=\"form-control\"\n                                        placeholder=\"{{'Enter Email'|translate}}\" id=\"login\" disabled>\n                                </ng-template>\n\n\n                                <ng-template #Add><input type=\"text\" [(ngModel)]=\"form.data.login\" name=\"login\"\n                                        class=\"form-control\" placeholder=\"{{'Enter Email' |translate}}\" id=\"login\">\n                                </ng-template>\n\n\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.login}} </span>\n\n\n                        </div>\n\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"form-check-label\">{{'Password'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                                </div>\n                                <input type=\"password\" [(ngModel)]=\"form.data.password\" name=\"password\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Password'|translate}}\" id=\"password\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \"> {{form.inputerror.password}} </span>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"gender\" class=\"form-check-label\">{{'Gender'|translate}}:\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-venus-double grey-text\"></i> </div>\n                                </div>\n                                <select [(ngModel)]=\"form.data.gender\" name=\"gender\" class=\"form-control\">\n                                    <option value=\"Male\">Male</option>\n                                    <option value=\"Female\">Female</option>\n                                </select>\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto\"> {{form.inputerror.gender}} </span>\n                        </div>\n\n\n\n\n                        <div class=\"form-group row \">\n                            <label for=\"datepicker\" class=\"form-check-label\">{{'Date of birth' |translate}}:<span\n                                    class=\"text-danger\">*</span>\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i> </div>\n                                </div>\n                                <input type=\"date\" id=\"datepicker\" name=\"dob\" [(ngModel)]=\"form.data.dob\"\n                                    class=\"form-control\" placeholder=\"{{'Enter Date of Birth'|translate}}\">\n                            </div>\n\n                            <span class=\"text-danger mr-auto mb-auto \">{{form.inputerror.dob}}</span>\n                        </div>\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"picture\" class=\"form-check-label\">{{'Upload Picture'|translate}}:\n                            </label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-file-picture-o grey-text\"></i> </div>\n                                </div>\n                                <input type=\"file\" (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\"\n                                    name=\"pic\" class=\"form-control\" placeholder=\"{{'Upload Image'|translate}}\" id=\"pic\">\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-inline\">\n\n\n                            <div class=\"col-4\">\n\n                            </div>\n\n                            <div class=\"text-center\">\n                                <div *ngIf=\"form.data.id > 0 ; then update else add\"></div>\n\n                                <ng-template #add>\n                                    <button (click)=\"submit()\" class=\"btn btn-success\">{{'Save'|translate}}</button>&nbsp;\n                                    <input type=\"reset\" class=\"btn btn-secondary\" name=\"{{'Reset'|translate}}\" (click)=\"reset()\">\n                                </ng-template>\n\n                                <ng-template #update>\n                                    <button (click)=\"submit()\" class=\"btn btn-success \"> {{'Update' |translate}}</button>&nbsp;\n                                    <button (click)=\"cancel()\" class=\"btn btn-secondary\"> {{'Cancel' |translate}}</button>\n                                </ng-template>\n\n\n                            </div>\n\n                        </div>\n\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"container-fluid row \">\n    <div class=\"content-wrapper row ml-3\" style=\"padding-top: 0%; background-image: url(./assets/list.jpg); background-repeat: no-repeat;\n    background-attachment: fixed;background-size: cover;width:100%;height: 650px;bottom: 0%;\">\n\n        <div class=\"col-sm-12\">\n            <h1 class=\"text-danger text-center \" style=\"margin-top: 17%;\">Welcome To Online Result System</h1>\n        </div>\n\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashbord/dashbord.component */ "./src/app/dashbord/dashbord.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _login_forget_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/forget-password.component */ "./src/app/login/forget-password.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _timetable_time_table_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./timetable/time-table-list.component */ "./src/app/timetable/time-table-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _user_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/change-password.component */ "./src/app/user/change-password.component.ts");
/* harmony import */ var _user_my_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/my-profile.component */ "./src/app/user/my-profile.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _login_user_registration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/user-registration.component */ "./src/app/login/user-registration.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");





























const routes = [
    {
        path: "signup",
        component: _login_user_registration_component__WEBPACK_IMPORTED_MODULE_23__["UserRegistrationComponent"],
    },
    {
        path: "marksheet",
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_27__["MarksheetComponent"],
    },
    {
        path: "marksheetlist",
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksheetListComponent"],
    },
    {
        path: "forgotpassword",
        component: _login_forget_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgetPasswordComponent"],
    },
    {
        path: "changepassword",
        component: _user_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"],
    },
    {
        path: "myprofile",
        component: _user_my_profile_component__WEBPACK_IMPORTED_MODULE_21__["MyProfileComponent"],
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
    },
    {
        path: "dashbord",
        component: _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_7__["DashbordComponent"],
    },
    {
        path: "login/:in",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
    },
    {
        path: "",
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__["WelcomeComponent"],
    },
    {
        path: "ORS",
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_25__["WelcomeComponent"],
    },
    {
        path: "user",
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
    },
    {
        path: "user/:id",
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
    },
    {
        path: "userlist",
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_22__["UserListComponent"],
    },
    {
        path: "college",
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_4__["CollegeComponent"],
    },
    {
        path: "college/:id",
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_4__["CollegeComponent"],
    },
    {
        path: "collegelist",
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_3__["CollegeListComponent"],
    },
    {
        path: "role",
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_13__["RoleComponent"],
    },
    {
        path: "role/:id",
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_13__["RoleComponent"],
    },
    {
        path: "rolelist",
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_12__["RoleListComponent"],
    },
    {
        path: "subject",
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_17__["SubjectComponent"],
    },
    {
        path: "subject/:id",
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_17__["SubjectComponent"],
    },
    {
        path: "subjectlist",
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_16__["SubjectListComponent"],
    },
    {
        path: "TimeTable",
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_19__["TimetableComponent"],
    },
    {
        path: "TimeTable/:id",
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_19__["TimetableComponent"],
    },
    {
        path: "timetablelist",
        component: _timetable_time_table_list_component__WEBPACK_IMPORTED_MODULE_18__["TimeTableListComponent"],
    },
    {
        path: "student",
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_15__["StudentComponent"],
    },
    {
        path: "student/:id",
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_15__["StudentComponent"],
    },
    {
        path: "studentlist",
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"],
    },
    {
        path: "course",
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"],
    },
    {
        path: "course/:id",
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"],
    },
    {
        path: "courselist",
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"],
    },
    { path: "faculty", component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_9__["FacultyComponent"] },
    { path: "faculty/:id", component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_9__["FacultyComponent"] },
    { path: "facultylist", component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_8__["FacultyListComponent"] },
    { path: "timetable", component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_19__["TimetableComponent"] },
    { path: "timetable/:id", component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_19__["TimetableComponent"] },
    { path: "timetablelist", component: _timetable_time_table_list_component__WEBPACK_IMPORTED_MODULE_18__["TimeTableListComponent"] },
    {
        path: "**",
        component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_26__["PageNotFoundComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.status = true;
        this.name = "kamal";
        this.title = 'ORS';
    }
    //status: boolean = true;
    /*this is for ngOnChange */
    submitvalue(val) {
        this.sam = val.value;
        console.log("submit value running ");
        //  console.log(val.value);
    }
    getTime() {
        return "Morning 10 o clock";
    }
    showBlock(data) {
        console.log(data.target.value);
        if (data.target.value == "show") {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _foot_foot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foot/foot.component */ "./src/app/foot/foot.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _timetable_time_table_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./timetable/time-table-list.component */ "./src/app/timetable/time-table-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashbord/dashbord.component */ "./src/app/dashbord/dashbord.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _user_my_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/my-profile.component */ "./src/app/user/my-profile.component.ts");
/* harmony import */ var _user_change_password_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/change-password.component */ "./src/app/user/change-password.component.ts");
/* harmony import */ var _login_forget_password_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/forget-password.component */ "./src/app/login/forget-password.component.ts");
/* harmony import */ var _login_user_registration_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./login/user-registration.component */ "./src/app/login/user-registration.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








































function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            //  HttpClientModule,
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _foot_foot_component__WEBPACK_IMPORTED_MODULE_6__["FootComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
            _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__["TimetableComponent"],
            _subject_subject_component__WEBPACK_IMPORTED_MODULE_13__["SubjectComponent"],
            _role_role_component__WEBPACK_IMPORTED_MODULE_14__["RoleComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_16__["StudentComponent"],
            _course_course_component__WEBPACK_IMPORTED_MODULE_17__["CourseComponent"],
            _user_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
            _college_college_component__WEBPACK_IMPORTED_MODULE_20__["CollegeComponent"],
            _college_college_list_component__WEBPACK_IMPORTED_MODULE_21__["CollegeListComponent"],
            _role_role_list_component__WEBPACK_IMPORTED_MODULE_22__["RoleListComponent"],
            _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
            _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_24__["SubjectListComponent"],
            _timetable_time_table_list_component__WEBPACK_IMPORTED_MODULE_25__["TimeTableListComponent"],
            _course_course_list_component__WEBPACK_IMPORTED_MODULE_26__["CourseListComponent"],
            _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_27__["FacultyComponent"],
            _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_28__["FacultyListComponent"],
            _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_29__["MarksheetComponent"],
            _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_30__["MarksheetListComponent"],
            _dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_31__["DashbordComponent"],
            _user_my_profile_component__WEBPACK_IMPORTED_MODULE_34__["MyProfileComponent"],
            _user_change_password_component__WEBPACK_IMPORTED_MODULE_35__["ChangePasswordComponent"],
            _login_forget_password_component__WEBPACK_IMPORTED_MODULE_36__["ForgetPasswordComponent"],
            _login_user_registration_component__WEBPACK_IMPORTED_MODULE_37__["UserRegistrationComponent"],
            _page_not_found_component__WEBPACK_IMPORTED_MODULE_38__["PageNotFoundComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateLoader"],
                    useFactory: myHttpLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                },
            }),
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_18__["HttpServiceService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_39__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_39__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-locator.service */ "./src/app/service-locator.service.ts");



class BaseListCtl extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseCtl"] {
    //flag: boolean;
    constructor(endpoint, locator, route) {
        super(endpoint, locator, route);
        this.endpoint = endpoint;
        this.locator = locator;
        this.route = route;
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
    selectAll() { }
}
BaseListCtl.ctorParameters = () => [
    null,
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }
];


/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-locator.service */ "./src/app/service-locator.service.ts");



class BaseCtl {
    constructor(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            preload: null,
        };
        this.form = {
            error: true,
            message: null,
            preload: {},
            data: { id: null, pageNo: 0, pageSize: 5 },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0,
            pageSize: 0,
            count: 0,
        };
        var _self = this;
        _self.initApi(endpoint);
        //    console.log("in constructor:::::::", _self.initApi(endpoint))
        serviceLocator.getPathVariable(route, function (params) {
            console.log("params print from get pathvariable :::", params["id"]);
            _self.form.data.id = params["id"];
            console.log("I GOT ID", _self.form.data.id);
        });
    }
    reset() {
        this.form.error = false;
        this.form.message = null;
        this.form.inputerror = {};
        this.form.data = { id: null, pageNo: null, pageSize: null };
        this.display();
    }
    initApi(ep) {
        console.log("value of ep is :::", ep);
        this.api.endpoint = ep;
        console.log("in it api :::", this.api.endpoint);
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.preload = ep + "/preload";
        console.log("API final for preload ", this.api.preload);
    }
    ngOnInit() {
        console.log("i am in base component NG OnIn it");
        console.log("cklsbfguwefyuadbpgvdbvgy::::::::::::::::" + this.form.data.id);
        this.preload();
        //this for if id in perameter
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
        console.log("run");
    }
    preload() {
        console.log("i am working preload");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            console.log("result print ::::", res);
            if (res.sucess) {
                console.log("incoming items print :::::", res.result);
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
                _self.form.message = "An Error Occured please reload";
            }
            console.log("FORM data print from preload::::", _self.form.preload);
        });
    }
    display() {
        console.log("i am in display");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            console.log("finale API is :::" + _self.api.get + "/" + _self.form.data.id);
            if (res.sucess) {
                console.log("Under res. sucess base ctl ", res.result.name);
                _self.populateForm(_self.form.data, res.result);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log("i am in FORM", _self.form.data);
        });
    }
    populateForm(form, data) {
        console.log(":Populate form in base ctl  :");
        form.id = data.id;
    }
    submit() {
        console.log(" submit from Base component");
        var _self = this;
        console.log("in submit mathod", this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = null;
            _self.form.inputerror = {};
            if (res.sucess) {
                console.log("i am in Submit sucess");
                _self.form.error = false;
                _self.form.message = "Data is saved";
                //_self.forward('/user')
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                console.log("Input error print ", _self.form.inputerror);
                _self.form.message = res.result.message;
            }
            //console.log('FORM', _self.form);
        });
    }
    search() {
        console.log("i am in Search basecomponent ");
        var _self = this;
        _self.populateForm(_self.form.data, _self.form.searchParams);
        _self.form.searchParams["pageNo"] = _self.form.data.pageNo;
        _self.form.searchParams["pageSize"] = _self.form.data.pageSize;
        console.log("Search Form data", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search, _self.form.searchParams, function (res) {
            if (res.sucess) {
                console.log("i am in search under if ");
                _self.form.list = res.result.list;
                console.log("List data print::::", _self.form.list);
                _self.form.pageNo = res.result.pageNo;
                _self.form.pageSize = res.result.pageSize;
                _self.form.count = res.result.count;
                _self.form.searchParams = res.result.searchParams;
                if (_self.form.count == 0) {
                    console.log("gardad------------------------------");
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                //console.log("List Size", _self.form.count,"Page No",_self.form.pageNo,"page Size",_self.form.pageSize,"count",_self.form.count);
            }
            else {
                _self.form.error = false;
                _self.form.message = null;
            }
            console.log("form ----------------------" + _self.form.message);
        });
    }
    delete(id) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.error = false;
                _self.form.message = "Data is deleted";
                _self.search();
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    }
    forward(page) {
        console.log("Forward working :::");
        this.serviceLocator.forward(page);
    }
}
BaseCtl.ctorParameters = () => [
    { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_1__["EndpointServiceService"] },
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }
];


/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let CollegeListComponent = class CollegeListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(servicelocator, router) {
        super(servicelocator.endpointService.COLLEGE, servicelocator, router);
        this.servicelocator = servicelocator;
        this.router = router;
    }
};
CollegeListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-college-list',
        template: __webpack_require__(/*! raw-loader!./college-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/college/college-list.component.html"),
    })
], CollegeListComponent);



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UvY29sbGVnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let CollegeComponent = class CollegeComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, route) {
        super(serviceLocator.endpointService.COLLEGE, serviceLocator, route);
        this.serviceLocator = serviceLocator;
        this.route = route;
    }
    populateForm(form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.phoneNo = data.phoneNo;
        form.city = data.city;
        form.dob = data.dob;
        // form.address = data.address;
        form.collegeId = data.collegeId;
    }
    cancel() {
        this.forward('/collegelist');
    }
};
CollegeComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-college',
        template: __webpack_require__(/*! raw-loader!./college.component.html */ "./node_modules/raw-loader/index.js!./src/app/college/college.component.html"),
        styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
    })
], CollegeComponent);



/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let CourseListComponent = class CourseListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(serviceLOcator, route) { super(serviceLOcator.endpointService.COURSE, serviceLOcator, route); }
};
CourseListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course-list',
        template: __webpack_require__(/*! raw-loader!./course-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/course/course-list.component.html"),
    })
], CourseListComponent);



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let CourseComponent = class CourseComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, router) {
        super(serviceLocator.endpointService.COURSE, serviceLocator, router);
    }
    populateForm(form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.courseDescription = data.courseDescription;
        form.courseDuration = data.courseDuration;
    }
    cancel() {
        this.forward('/courselist');
    }
};
CourseComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: __webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/index.js!./src/app/course/course.component.html"),
        styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
    })
], CourseComponent);



/***/ }),

/***/ "./src/app/dashbord/dashbord.component.css":
/*!*************************************************!*\
  !*** ./src/app/dashbord/dashbord.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib3JkL2Rhc2hib3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashbord/dashbord.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashbord/dashbord.component.ts ***!
  \************************************************/
/*! exports provided: DashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbordComponent", function() { return DashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashbordComponent = class DashbordComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashbord',
        template: __webpack_require__(/*! raw-loader!./dashbord.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashbord/dashbord.component.html"),
        styles: [__webpack_require__(/*! ./dashbord.component.css */ "./src/app/dashbord/dashbord.component.css")]
    })
], DashbordComponent);



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EndpointServiceService = class EndpointServiceService {
    constructor() {
        this.SERVER_URL = "http://localhost:8081";
        this.USER = this.SERVER_URL + "/User";
        this.ROLE = this.SERVER_URL + "/Role";
        this.AUTH = this.SERVER_URL + "/Auth";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.MARKSHEET = this.SERVER_URL + "/MarkSheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
    }
};
EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EndpointServiceService);



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let FacultyListComponent = class FacultyListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(serviceLocator, route) { super(serviceLocator.endpointService.FACULTY, serviceLocator, route); }
};
FacultyListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faculty-list',
        template: __webpack_require__(/*! raw-loader!./faculty-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty-list.component.html"),
    })
], FacultyListComponent);



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let FacultyComponent = class FacultyComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, router) {
        super(serviceLocator.endpointService.FACULTY, serviceLocator, router);
        this.serviceLocator = serviceLocator;
    }
    populateForm(form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
        form.address = data.address;
        form.collegeId = data.collegeId;
        form.subjectId = data.subjectId;
        form.courseId = data.courseId;
    }
    cancel() {
        this.forward('/facultylist');
    }
};
FacultyComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faculty',
        template: __webpack_require__(/*! raw-loader!./faculty.component.html */ "./node_modules/raw-loader/index.js!./src/app/faculty/faculty.component.html"),
        styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
    })
], FacultyComponent);



/***/ }),

/***/ "./src/app/foot/foot.component.css":
/*!*****************************************!*\
  !*** ./src/app/foot/foot.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3QvZm9vdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/foot/foot.component.ts":
/*!****************************************!*\
  !*** ./src/app/foot/foot.component.ts ***!
  \****************************************/
/*! exports provided: FootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootComponent", function() { return FootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FootComponent = class FootComponent {
    constructor() { }
    ngOnInit() {
    }
};
FootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foot',
        template: __webpack_require__(/*! raw-loader!./foot.component.html */ "./node_modules/raw-loader/index.js!./src/app/foot/foot.component.html"),
        styles: [__webpack_require__(/*! ./foot.component.css */ "./src/app/foot/foot.component.css")]
    })
], FootComponent);



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");





//import { CookieService } from 'ngx-cookie-service';
let HttpServiceService = class HttpServiceService {
    constructor(router, httpClint, cookie) {
        this.router = router;
        this.httpClint = httpClint;
        this.cookie = cookie;
    }
    isLogout() {
        console.log("Is Logout calling >>>!!!!!!");
        //  return false;
        var _self = this;
        let SessionID = localStorage.getItem('firstName');
        console.log("URL:: ----------------" + this.router.url);
        if ((SessionID == "" || SessionID == null) && (this.router.url != "/login" && this.router.url != "/Auth"
            && this.router.url != "/login/logout" && this.router.url != "/forgotpassword"
            && this.router.url != "/signup" && !this.router.url.includes("/login/"))) {
            if (_self.router.url.includes("login")) {
                var uri = _self.router.url;
            }
            else {
                console.log("i am Http Service .service else condition ");
                var uri = '/login' + _self.router.url;
                console.log("URI print " + uri);
            }
            _self.router.navigateByUrl(uri);
            console.log("Going to return true");
            return true;
        }
        else {
            console.log("Going to return false");
            return false;
        }
    }
    get(endpoint, callback) {
        console.log("get mathod calling ");
        var _self = this;
        if (this.isLogout()) {
            console.log("i am in get if condition ");
            return true;
        }
        return _self.httpClint.get(endpoint, { withCredentials: true }).subscribe((data) => {
            console.log("after if block :::" + data);
            callback(data);
        });
    }
    post(endpoint, bean, callback) {
        console.log("Bin print Http service ::", bean);
        console.log("landed in post ::: end point print :::" + endpoint);
        var _self = this;
        if (this.isLogout()) {
            console.log("i am in post if condition ");
            return true;
        }
        return _self.httpClint.post(endpoint, bean, { withCredentials: true }).subscribe((data) => {
            console.log(" areeee aayaa kyaaaa Data print ::::", data);
            callback(data);
        }, error => {
            console.log('ORS Error', error);
        });
    }
};
HttpServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpServiceService);



/***/ }),

/***/ "./src/app/login/forget-password.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login/forget-password.component.ts ***!
  \****************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");




let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(serviceLocator, endPoint) {
        this.serviceLocator = serviceLocator;
        this.endPoint = endPoint;
        this.form = {
            error: false,
            message: null,
            data: {},
            inputerror: {}
        };
    }
    ngOnInit() {
    }
    reset() {
        this.form.error = false,
            this.form.message = null,
            this.form.inputerror = {};
        //   this.form.data = { id: null, pageNo: null, pageSize: null };
        // this.display();
    }
    forget() {
        var _self = this;
        console.log("Forget password working ");
        this.serviceLocator.httpService.post(this.endPoint.AUTH + "/forgotpassword", this.form.data, function (res) {
            if (res.sucess) {
                _self.populateForm(_self.form.data, res.result);
                _self.form.message = res.result;
                _self.form.error = false;
            }
            else {
                _self.form.inputerror = res.result.inputerror.login;
                console.log("input error print :::" + res.result.inputerror.login);
                _self.form.message = res.result.inputerror.login;
                _self.form.error = true;
            }
        });
    }
    populateForm(form, data) {
        form.login = data.login;
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"] },
    { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_2__["EndpointServiceService"] }
];
ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/forget-password.component.html"),
    })
], ForgetPasswordComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let LoginComponent = class LoginComponent {
    constructor(route, endpoint, servicelocator) {
        this.route = route;
        this.endpoint = endpoint;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            inputerror: {},
            data: {},
        };
        var s = "in";
        var _self = this;
        this.servicelocator.getPathVariable(this.route, function (params) {
            s = params["in"];
            console.log("s Print :::", s);
        });
        if (s == "logout") {
            _self.form.message = "Logout Successfull";
        }
        else if (s != undefined) {
            _self.form.error = true;
            _self.form.message = "Session Expired Please Login";
        }
    }
    ngOnInit() {
    }
    signUp() {
        console.log("sing UP page ");
        this.servicelocator.forward('signup');
    }
    signIn() {
        var _self = this;
        var uri = 'in';
        console.log("Form data print :::", _self.form.data);
        this.servicelocator.httpService.post(this.endpoint.AUTH + '/login', _self.form.data, function (res) {
            if (res.sucess) {
                localStorage.setItem('firstName', res.result.data.firstName);
                localStorage.setItem('roleId', res.result.data.roleId);
                //  localStorage.setItem('roleName', res.result.data.roleName);
                _self.servicelocator.getPathVariable(_self.route, function (params) {
                    uri = params['in'];
                });
                if (uri == undefined) {
                    console.log("1");
                    _self.servicelocator.forward('/dashbord');
                }
                else if (uri == "logout") {
                    _self.servicelocator.forward('/dashbord');
                }
                else if (uri != undefined) {
                    _self.servicelocator.forward(uri);
                }
            }
            else {
                console.log('inelse : ', res.result.data);
                _self.populateForm(_self.form.data, res.result.data);
                _self.form.inputerror = res.result.inputerror;
                console.log("------------------", res.result.inputerror);
                _self.form.error = false;
                if (res.result.msg) {
                    //  _self.populateForm(_self.form.data, res.result.data);
                    _self.form.error = true;
                    _self.form.message = res.result.msg;
                }
                else {
                    _self.form.message = null;
                }
            }
        });
    }
    populateForm(form, data) {
        console.log("I am in populate Loging ::");
        form.login = data.login;
        form.password = data.password;
        console.log("I am in populate Loging ::", form);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"] },
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/user-registration.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/user-registration.component.ts ***!
  \******************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");






let UserRegistrationComponent = class UserRegistrationComponent extends _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] {
    constructor(router, endpoint, serviceLocator) {
        super(router, endpoint, serviceLocator);
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.form = {
            error: false,
            message: null,
            inputerror: {},
            data: {},
        };
    }
    ngOnInit() {
    }
    reset() {
        this.form.error = false,
            this.form.message = null,
            this.form.inputerror = {};
        //   this.form.data = { id: null, pageNo: null, pageSize: null };
        // this.display();
    }
    submit() {
        var _self = this;
        console.log("Submit calling ::!!!!");
        _self.serviceLocator.httpService.post(this.endpoint.AUTH + "/register", this.form.data, function (res) {
            if (res.sucess) {
                _self.form.message = "User Registered Successfull please login";
                _self.form.error = true;
            }
            else {
                _self.form.inputerror = res.result.inputerror;
                console.log("Input error print ::::", res);
            }
        });
    }
};
UserRegistrationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"] },
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] }
];
UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-registration',
        template: __webpack_require__(/*! raw-loader!./user-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/user-registration.component.html"),
    })
], UserRegistrationComponent);



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let MarksheetListComponent = class MarksheetListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(servceLocator, route) {
        super(servceLocator.endpointService.MARKSHEET, servceLocator, route);
        this.servceLocator = servceLocator;
        this.route = route;
    }
};
MarksheetListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-marksheet-list",
        template: __webpack_require__(/*! raw-loader!./marksheet-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet-list.component.html"),
    })
], MarksheetListComponent);



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let MarksheetComponent = class MarksheetComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, route) {
        super(serviceLocator.endpointService.MARKSHEET, serviceLocator, route);
        this.serviceLocator = serviceLocator;
        this.route = route;
    }
};
MarksheetComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marksheet',
        template: __webpack_require__(/*! raw-loader!./marksheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/marksheet/marksheet.component.html"),
    })
], MarksheetComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






let NavComponent = class NavComponent {
    constructor(transalate, cookie, serviceLocator, endpoint) {
        this.transalate = transalate;
        this.cookie = cookie;
        this.serviceLocator = serviceLocator;
        this.endpoint = endpoint;
        this.firstname = "";
        this.rolename = "";
        this.roleid = "";
        this.menu = {};
        console.log("Constructor working nav tab");
        this.changeLocale("en");
        transalate.setDefaultLang(localStorage.getItem("locale"));
    }
    changeLocale(locale) {
        localStorage.setItem("locale", locale);
        this.transalate.use(localStorage.getItem("locale"));
        this.ngOnInit();
    }
    ngOnInit() { }
    checkLogin() {
        console.log("i am in check Login mathod");
        var _self = this;
        var session = "";
        console.log("local storage print", localStorage);
        session = localStorage.getItem("firstName");
        console.log("Session data print ::::" + localStorage.getItem("firstName"));
        console.log("Session data print Role name print::", localStorage.getItem("roleId"));
        console.log("Session Print ::::");
        if (session != null) {
            this.firstname = localStorage.getItem("firstName");
            this.roleid = localStorage.getItem("roleId");
            console.log("Role id print again ", this.roleid);
            if (this.roleid == "1") {
                this.rolename = "Admin";
            }
            if (this.roleid == "2") {
                this.rolename = "Student";
            }
            if (this.roleid == "3") {
                this.rolename = "Faculty";
            }
            if (this.roleid == "4") {
                this.rolename = "Kiosk";
            }
            else {
                this.rolename + "Gaust";
            }
            console.log("final role name is ::: ", this.rolename);
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        var _self = this;
        this.serviceLocator.httpService.get("http://localhost:8081/Auth/logout", function (res) {
            console.log("in logout mathod ");
            if (res.sucess) {
                localStorage.removeItem("firstName");
                localStorage.removeItem("roleName");
                _self.serviceLocator.forward("login");
            }
            else {
                console.log("inelse");
            }
        });
        _self.cookie.delete("connect.sid");
    }
};
NavComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
    { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_4__["EndpointServiceService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav",
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-locator.service */ "./src/app/service-locator.service.ts");






let PageNotFoundComponent = class PageNotFoundComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"] {
    constructor(servicelocator, route, httpclint) {
        super(servicelocator.endpointService.USER, servicelocator, route);
        this.servicelocator = servicelocator;
        this.route = route;
        this.httpclint = httpclint;
        console.log("i an in User Component ");
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-page-not-found",
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found.component.html"),
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/role/role-list.component.css":
/*!**********************************************!*\
  !*** ./src/app/role/role-list.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let RoleListComponent = class RoleListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(serviceLocator, route) {
        super(serviceLocator.endpointService.ROLE, serviceLocator, route);
    }
};
RoleListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-list',
        template: __webpack_require__(/*! raw-loader!./role-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/role-list.component.html"),
        styles: [__webpack_require__(/*! ./role-list.component.css */ "./src/app/role/role-list.component.css")]
    })
], RoleListComponent);



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let RoleComponent = class RoleComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, route) {
        super(serviceLocator.endpointService.ROLE, serviceLocator, route);
        this.serviceLocator = serviceLocator;
        this.route = route;
    }
    populateForm(form, data) {
        // form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        /*
        form.login = data.login;
        form.password = data.password;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
        form.status = data.status;
        form.roleId = data.roleId;
    
    
      */ 
    }
    cancel() {
        this.forward('/rolelist');
    }
};
RoleComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role',
        template: __webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/role.component.html"),
        styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
    })
], RoleComponent);



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");





let ServiceLocatorService = class ServiceLocatorService {
    constructor(hs, ep, r) {
        this.hs = hs;
        this.ep = ep;
        this.r = r;
        this.httpService = null;
        this.endpointService = null;
        this.router = null;
        this.httpService = hs;
        this.endpointService = ep;
        this.router = r;
    }
    getPathVariable(route, callback) {
        route.params.subscribe((params) => {
            console.log("params print :::::", params);
            callback(params);
        });
    }
    forward(page) {
        console.log("forward mathod call Service locator serviceS");
        this.router.navigateByUrl(page);
    }
};
ServiceLocatorService.ctorParameters = () => [
    { type: _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"] },
    { type: _endpoint_service_service__WEBPACK_IMPORTED_MODULE_3__["EndpointServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ServiceLocatorService);



/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let StudentListComponent = class StudentListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(serviceLocator, route) {
        super(serviceLocator.endpointService.STUDENT, serviceLocator, route);
        this.serviceLocator = serviceLocator;
        this.route = route;
    }
};
StudentListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-list',
        template: __webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/student-list.component.html"),
    })
], StudentListComponent);



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let StudentComponent = class StudentComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, route) { super(serviceLocator.endpointService.STUDENT, serviceLocator, route); }
    populateForm(form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.collegeId = data.collegeId;
        form.email = data.email;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
    }
    cancel() {
        this.forward('/studentlist');
    }
};
StudentComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html"),
        styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
    })
], StudentComponent);



/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let SubjectListComponent = class SubjectListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(serviceLOcator, router) {
        super(serviceLOcator.endpointService.SUBJECT, serviceLOcator, router);
        this.serviceLOcator = serviceLOcator;
        this.router = router;
    }
    populateForm(form, searchParams) {
        form.subjectName = searchParams.subjectName;
        form.courseId = searchParams.courseId;
    }
};
SubjectListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject-list',
        template: __webpack_require__(/*! raw-loader!./subject-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/subject/subject-list.component.html"),
    })
], SubjectListComponent);



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let SubjectComponent = class SubjectComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(serviceLocator, router) {
        super(serviceLocator.endpointService.SUBJECT, serviceLocator, router);
    }
    populateForm(form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectName = data.subjectName;
        form.subjectDescription = data.subjectDescription;
    }
    cancel() {
        this.forward('/subjectlist');
    }
};
SubjectComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject',
        template: __webpack_require__(/*! raw-loader!./subject.component.html */ "./node_modules/raw-loader/index.js!./src/app/subject/subject.component.html"),
        styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
    })
], SubjectComponent);



/***/ }),

/***/ "./src/app/timetable/time-table-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/timetable/time-table-list.component.ts ***!
  \********************************************************/
/*! exports provided: TimeTableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTableListComponent", function() { return TimeTableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let TimeTableListComponent = class TimeTableListComponent extends _base_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseListCtl"] {
    constructor(serviceLocator, router) {
        super(serviceLocator.endpointService.TIMETABLE, serviceLocator, router);
    }
};
TimeTableListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TimeTableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-time-table-list",
        template: __webpack_require__(/*! raw-loader!./time-table-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/timetable/time-table-list.component.html"),
    })
], TimeTableListComponent);



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let TimetableComponent = class TimetableComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"] {
    constructor(servicelocator, route) {
        super(servicelocator.endpointService.TIMETABLE, servicelocator, route);
        this.servicelocator = servicelocator;
        this.route = route;
    }
};
TimetableComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timetable',
        template: __webpack_require__(/*! raw-loader!./timetable.component.html */ "./node_modules/raw-loader/index.js!./src/app/timetable/timetable.component.html"),
        styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
    })
], TimetableComponent);



/***/ }),

/***/ "./src/app/user/change-password.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/change-password.component.ts ***!
  \***************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






let ChangePasswordComponent = class ChangePasswordComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"] {
    constructor(service, route, httpclint) {
        super(service.endpointService.USER, service, route);
        this.service = service;
        this.route = route;
        this.httpclint = httpclint;
        console.log("Change passwprd CTL running :::");
    }
    ngOnInit() { }
    submit() {
        console.log("change password submit calling :::");
        var _self = this;
        this.serviceLocator.httpService.post(this.api.endpoint + "/changePassword", this.form.data, function (res) {
            if (res.sucess) {
                _self.form.error = false;
                _self.form.message = "Password Changed successfully";
            }
            else {
                _self.form.error = true;
                _self.form.message = "Error";
            }
        });
    }
    populateForm(form, data) {
        form.oldPassword = data.oldPassword;
        form.password = data.password;
        form.confirmPassword = form.confirmPassword;
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-change-password",
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/change-password.component.html"),
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/user/my-profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/user/my-profile.component.ts ***!
  \**********************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






let MyProfileComponent = class MyProfileComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"] {
    constructor(service, route, httpclint) {
        super(service.endpointService.User, service, route);
        this.service = service;
        this.route = route;
        this.httpclint = httpclint;
        this.uploadId = 0;
        this.getKey = false;
        this.selected = null;
        this.fileToUpload = null;
        this.userForm = null;
    }
    ngOnInit() {
        var _self = this;
        this.service.httpService.get("http://localhost:8081/User/myProfile", function (res) {
            if (res.sucess) {
                console.log("NAv result print :::", res.result);
                _self.populateForm(_self.form.data, res.result);
            }
            else {
                _self.form.error = true;
                _self.form.message = "error";
                _self.form.inputerror = res.result.inputerror;
            }
        });
    }
    populateForm(form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.login = data.login;
        form.password = data.password;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
        form.status = data.status;
        form.roleId = data.roleId;
        form.picName = data.picName;
    }
    myFile() {
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(data => {
            console.log(this.fileToUpload);
        }, error => {
            console.log(error);
        });
    }
    onSubmitProfile(fileToUpload, userForm) {
        const formData = new FormData();
        var _self = this;
        formData.append('pic', fileToUpload);
        return this.httpclint.post(this.endpoint.USER + "/profilePic/" + this.uploadId, formData, { withCredentials: true });
    }
    onFileSelect(files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    }
    onUpload(userform) {
        this.submit();
    }
};
MyProfileComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/my-profile.component.html"),
    })
], MyProfileComponent);



/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





let UserListComponent = class UserListComponent extends src_app_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"] {
    constructor(serviceLocator, router) {
        super(serviceLocator.endpointService.USER, serviceLocator, router);
        this.serviceLocator = serviceLocator;
        this.router = router;
    }
    populateForm(form, searchParams) {
        console.log("I am in populate form User LIst CTL search params role ID " + searchParams.roleId);
        form.firstName = searchParams.firstName;
        // form.lastName = searchParams.lastName;
        form.login = searchParams.login;
        //form.status = searchParams.status;
        form.roleId = searchParams.roleId;
    }
    search() {
        console.log("i am in search user List Component:::");
        this.form.data.pageSize = 5;
        super.search();
    }
    preload() {
        console.log("i am working preload::::");
        super.preload();
    }
};
UserListComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-list.component.html"),
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






let UserComponent = class UserComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"] {
    constructor(servicelocator, route, httpclint) {
        super(servicelocator.endpointService.USER, servicelocator, route);
        this.servicelocator = servicelocator;
        this.route = route;
        this.httpclint = httpclint;
        this.uploadId = 0;
        this.getKey = false;
        this.selected = null;
        this.fileToUpload = null;
        this.userForm = null;
        console.log("i an in User Component ");
    }
    ;
    populateForm(form, data) {
        form.id = data.id;
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.login = data.login;
        form.password = data.password;
        form.gender = data.gender;
        form.mobileNo = data.mobileNo;
        form.dob = data.dob;
        form.status = data.status;
        form.roleId = data.roleId;
    }
    submit() {
        console.log("hy i am in submit User Component Data comes from HTML :::");
        var _self = this;
        this.servicelocator.httpService.post(this.api.save, this.form.data, function (res) {
            console.log("form data print :::::");
            _self.form.message = null;
            _self.form.inputerror = {};
            if (res.sucess) {
                console.log("res. sucess", res);
                _self.uploadId = res.result;
                if (_self.fileToUpload != null) {
                    console.log("if upload not null");
                    _self.myFile();
                }
                _self.form.error = false;
                _self.form.message = "Data is saved";
                //_self.forward('/user/'+res.result)
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            //console.log('FORM', _self.form);
        });
    }
    myFile() {
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(data => {
            console.log(this.fileToUpload);
        }, error => {
            console.log("Tell me error" + error);
        });
    }
    onSubmitProfile(fileToUpload, userform) {
        const formData = new FormData();
        var _self = this;
        formData.append('pic', fileToUpload);
        console.log(this.uploadId + 'this id number ======');
        return this.httpclint.post("http://localhost:8081/User/profilePic/" + this.uploadId, formData, { withCredentials: true });
    }
    onFileSelect(files) {
        this.fileToUpload = files.item(0);
        console.log("ON FileSelect mathod", this.fileToUpload);
    }
    onUpload(userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    }
    cancel() {
        this.forward('/userlist');
    }
};
UserComponent.ctorParameters = () => [
    { type: _service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ORSUI\ORS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map