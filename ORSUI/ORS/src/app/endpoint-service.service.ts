import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }
  public SERVER_URL = "http://localhost:8081";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role"
  public AUTH = this.SERVER_URL + "/Auth";
  public COLLEGE = this.SERVER_URL + "/College";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public MARKSHEET = this.SERVER_URL + "/MarkSheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public TIMETABLE = this.SERVER_URL + "/TimeTable"
}
