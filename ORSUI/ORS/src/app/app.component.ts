import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean = true;
  sam: any;
  name: String = "kamal";
  title = 'ORS';
  //status: boolean = true;

  /*this is for ngOnChange */

  submitvalue(val) {

    this.sam = val.value;


    console.log("submit value running ");
    //  console.log(val.value);


  }
  getTime() {
    return "Morning 10 o clock"
  }

  showBlock(data) {


    console.log(data.target.value);
    if (data.target.value == "show") {

      this.status = true;
    } else {
      this.status = false;

    }

  }


}
