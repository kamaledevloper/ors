import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollegeListComponent } from "./college/college-list.component";
import { CollegeComponent } from "./college/college.component";
import { CourseListComponent } from "./course/course-list.component";
import { CourseComponent } from "./course/course.component";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { ForgetPasswordComponent } from "./login/forget-password.component";
import { LoginComponent } from "./login/login.component";
import { RoleListComponent } from "./role/role-list.component";
import { RoleComponent } from "./role/role.component";
import { StudentListComponent } from "./student/student-list.component";
import { StudentComponent } from "./student/student.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { SubjectComponent } from "./subject/subject.component";
import { TimeTableListComponent } from "./timetable/time-table-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { ChangePasswordComponent } from "./user/change-password.component";
import { MyProfileComponent } from "./user/my-profile.component";
import { UserListComponent } from "./user/user-list.component";
import { UserRegistrationComponent } from "./login/user-registration.component";
import { UserComponent } from "./user/user.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { MarksheetComponent } from "./marksheet/marksheet.component";
import { MarksheetListComponent } from "./marksheet/marksheet-list.component";
const routes: Routes = [
  {
    path: "signup",
    component: UserRegistrationComponent,
  },

  {
    path: "marksheet",
    component: MarksheetComponent,
  },


  {
    path: "marksheetlist",
    component: MarksheetListComponent,
  },

  {
    path: "forgotpassword",
    component: ForgetPasswordComponent,
  },

  {
    path: "changepassword",
    component: ChangePasswordComponent,
  },

  {
    path: "myprofile",
    component: MyProfileComponent,
  },

  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "dashbord",
    component: DashbordComponent,
  },

  {
    path: "login/:in",
    component: LoginComponent,
  },
  {
    path: "",
    component: WelcomeComponent,
  },

  {
    path: "ORS",
    component: WelcomeComponent,
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "user/:id",
    component: UserComponent,
  },

  {
    path: "userlist",
    component: UserListComponent,
  },

  {
    path: "college",
    component: CollegeComponent,
  },
  {
    path: "college/:id",
    component: CollegeComponent,
  },

  {
    path: "collegelist",
    component: CollegeListComponent,
  },
  {
    path: "role",
    component: RoleComponent,
  },
  {
    path: "role/:id",
    component: RoleComponent,
  },

  {
    path: "rolelist",
    component: RoleListComponent,
  },
  {
    path: "subject",
    component: SubjectComponent,
  },
  {
    path: "subject/:id",
    component: SubjectComponent,
  },

  {
    path: "subjectlist",
    component: SubjectListComponent,
  },
  {
    path: "TimeTable",
    component: TimetableComponent,
  },
  {
    path: "TimeTable/:id",
    component: TimetableComponent,
  },

  {
    path: "timetablelist",
    component: TimeTableListComponent,
  },
  {
    path: "student",
    component: StudentComponent,
  },

  {
    path: "student/:id",
    component: StudentComponent,
  },
  {
    path: "studentlist",

    component: StudentListComponent,
  },

  {
    path: "course",

    component: CourseComponent,
  },

  {
    path: "course/:id",

    component: CourseComponent,
  },

  {
    path: "courselist",

    component: CourseListComponent,
  },

  { path: "faculty", component: FacultyComponent },

  { path: "faculty/:id", component: FacultyComponent },
  { path: "facultylist", component: FacultyListComponent },

  { path: "timetable", component: TimetableComponent },

  { path: "timetable/:id", component: TimetableComponent },
  { path: "timetablelist", component: TimeTableListComponent },

  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
