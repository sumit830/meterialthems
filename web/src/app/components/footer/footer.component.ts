import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  isLoggedIn:any
  constructor(private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe(e => {       
      if (e instanceof NavigationEnd) {
        let urlSlice = e.url.toString().substr(0, 10);
        if (urlSlice== "/" || urlSlice=="/registart") {
          console.log(urlSlice);
          this.isLoggedIn = false;
          //this.messageEvent.emit(this.isLoggedIn);
        } else {
          this.isLoggedIn = true;
          //this.messageEvent.emit(this.isLoggedIn);
        }
      }
    });
  }
  isLoggedInhide() {
    return this.isLoggedIn;
  }

}
