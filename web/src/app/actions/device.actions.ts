import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
//import { User } from '../_models/index';
import {Device} from '../_models/index';
import { Http } from '@angular/http';
import { appConfig } from '../app.config';
@Injectable()
export class DeviceActions  {
  static DEVICE_GET = 'DEVICE_GET';
  static DEVICE_ADD = 'DEVICE_ADD';
  static DEVICE_UPDATE = 'DEVICE_UPDATE';
  static DEVICE_DELETE = 'DEVICE_DELETE';

   API_URL =appConfig.apiUrl; //'https://jsonplaceholder.typicode.com';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private http: Http,
  ) {
  }
   getDevice() {
     debugger;
    this.http.get(`${this.API_URL}/device`)
      .subscribe((res) => {
        // get users
        const list = res.json();
        // populate users state (dispatch action)
        this.ngRedux.dispatch({
          type: DeviceActions.DEVICE_GET,
          payload: {
            list
          }
        });
        // Set the first user as active (dispatch action)
        //this.setActiveUser(list[0].id);
      });
  }
}