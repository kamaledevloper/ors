import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FootComponent } from "./foot/foot.component";
import { NavComponent } from "./nav/nav.component";
import { CookieService } from "ngx-cookie-service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./welcome/welcome.component";
import { UserComponent } from "./user/user.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { SubjectComponent } from "./subject/subject.component";
import { RoleComponent } from "./role/role.component";
import { LoginComponent } from "./login/login.component";
import { StudentComponent } from "./student/student.component";
import { CourseComponent } from "./course/course.component";
import { HttpServiceService } from "./http-service.service";
import { UserListComponent } from "./user/user-list.component";
import { CollegeComponent } from "./college/college.component";
import { CollegeListComponent } from "./college/college-list.component";
import { RoleListComponent } from "./role/role-list.component";
import { StudentListComponent } from "./student/student-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { TimeTableListComponent } from "./timetable/time-table-list.component";
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { MarksheetComponent } from "./marksheet/marksheet.component";
import { MarksheetListComponent } from "./marksheet/marksheet-list.component";
import { DashbordComponent } from "./dashbord/dashbord.component";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


import { MyProfileComponent } from "./user/my-profile.component";
import { ChangePasswordComponent } from "./user/change-password.component";
import { ForgetPasswordComponent } from "./login/forget-password.component";
import { UserRegistrationComponent } from "./login/user-registration.component";
import { PageNotFoundComponent } from "./page-not-found.component";


import { HashLocationStrategy, LocationStrategy } from "@angular/common";



export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    //  HttpClientModule,
    AppComponent,
    FootComponent,
    NavComponent,
    WelcomeComponent,
    UserComponent,
    TimetableComponent,
    SubjectComponent,
    RoleComponent,
    LoginComponent,
    StudentComponent,
    CourseComponent,
    UserListComponent,
    CollegeComponent,
    CollegeListComponent,
    RoleListComponent,
    StudentListComponent,
    SubjectListComponent,
    TimeTableListComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    MarksheetComponent,
    MarksheetListComponent,
    DashbordComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    UserRegistrationComponent,
    PageNotFoundComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [
    CookieService,
    HttpServiceService,
   
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  
  
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
