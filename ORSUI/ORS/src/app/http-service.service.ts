import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
//import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private router: Router, private httpClint: HttpClient, private cookie: CookieService

  ) { }
  isLogout() {
    console.log("Is Logout calling >>>!!!!!!");
    //  return false;
    var _self = this;
    let SessionID = localStorage.getItem('firstName');
    console.log("URL:: ----------------" + this.router.url);

    if ((SessionID == "" || SessionID == null) && (this.router.url != "/login" && this.router.url != "/Auth"
        && this.router.url != "/login/logout" && this.router.url != "/forgotpassword"
        && this.router.url != "/signup" && !this.router.url.includes("/login/") )) {

      if (_self.router.url.includes("login")) {
        var uri = _self.router.url;
      } else {
        console.log("i am Http Service .service else condition ");
        var uri = '/login' + _self.router.url;
        console.log("URI print " + uri);
      }
      _self.router.navigateByUrl(uri)
      console.log("Going to return true");
      return true;

    } else {
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
    })
  }
  post(endpoint, bean, callback) {

    console.log("Bin print Http service ::",bean)
    console.log("landed in post ::: end point print :::"+endpoint);

    var _self = this
    if (this.isLogout()) {
      console.log("i am in post if condition ")
      return true;
    }
    return _self.httpClint.post(endpoint, bean, { withCredentials: true }).subscribe((data) => {
      
      
      console.log(" areeee aayaa kyaaaa Data print ::::", data);
      callback(data);

    }, error => {
      console.log('ORS Error', error);
    });
  }

}




