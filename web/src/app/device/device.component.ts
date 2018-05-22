import { Component, OnInit,ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService,AuthenticationService,UserService} from "../_services/index";
import { BasicValidators } from "../_services/basic-validators";
import { Device } from "../_models/index";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { DeviceActions } from '../actions/device.actions';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
    @select('device') public device$: Observable<Device>;
  @select(['device', 'active']) active$;
  activeUser;
  deviceForm: FormGroup;
  Device: Device = new Device();
  constructor(
    public actions:  DeviceActions,     
    formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private userService: UserService,
    private spinnerService: Ng4LoadingSpinnerService
    
  ) { 
    actions.getDevice();
     this.deviceForm = formBuilder.group({
      devicename: ["", [Validators.required, Validators.minLength(5)]],
      imeino: ["", [Validators.required, Validators.minLength(5)]],
      devicetype: ["", [Validators.required, Validators.minLength(5)]],
      simno: ["", [Validators.required, Validators.minLength(5)]],
      descriprtion: ["", [Validators.required, Validators.minLength(5)]]
    });
    
  }

  ngOnInit() {    
   
   // this._http.getRequest().subscribe(res=>this.requests=res);
  }
}
