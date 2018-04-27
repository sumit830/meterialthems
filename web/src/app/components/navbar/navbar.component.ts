import { Component, OnInit,Output, ElementRef,EventEmitter  } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: any;
  private listTitles: any[];
  location: Location;
  private toggleButton: any;
  private sidebarVisible: boolean;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let urlSlice = e.url.toString().substr(0, 10);
        if (urlSlice== "/" || urlSlice=="/registart") {
          console.log(urlSlice);
          this.isLoggedIn = false;
          this.messageEvent.emit(this.isLoggedIn);
        } else {
          this.isLoggedIn = true;
          this.messageEvent.emit(this.isLoggedIn);
        }
      }
    });
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName("body")[0];
    setTimeout(function() {
      toggleButton.classList.add("toggled");
    }, 500);
    body.classList.add("nav-open");

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    body.classList.remove("nav-open");
  }
  sidebarToggle() {
      if(this.isLoggedIn==true){
     const toggleButton = this.toggleButton;
     const body = document.getElementsByTagName('body')[0];
      }
    
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(2);
    }
    titlee = titlee.split("/").pop();

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }
  isLoggedInhide() {
    return this.isLoggedIn;
  }
}
