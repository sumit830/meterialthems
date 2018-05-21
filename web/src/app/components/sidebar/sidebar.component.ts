import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'device', title: 'Device Registration',  icon:'person', class: '' },
     { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  public isLoggedIn: any; 
  constructor( private router: Router) { }

  ngOnInit() {     
    this.menuItems = ROUTES.filter(menuItem => menuItem);
     this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let urlSlice = e.url.toString().substr(0, 10);
        if (urlSlice== "/" || urlSlice=="/registart") {
          console.log(urlSlice);
          this.isLoggedIn = false;
         
        } else {
          this.isLoggedIn = true;
          
        }
      }
    });
   
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
    isLoggedInhide(){
   return  this.isLoggedIn;
    };
}
