import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthenticationService } from '../_services/index';
import { BasicValidators } from '../_services/basic-validators';
import { User } from '../_models/index';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  shouldShow: any;
  isDisabled: any;  
  returnUrl:String;  
  loginForm: FormGroup;
  user: User = new User();
  constructor(
      formBuilder: FormBuilder,
    private router: Router,
    private authenticationService:AuthenticationService,
    private route:ActivatedRoute,
   private alertService:AlertService
  ) {
    this.loginForm = formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
  }

  ngOnInit() {
       this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  validate() {      
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.username)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                    this.router.navigate(["/", "dashboard"]);
                },
                error => {
                    this.alertService.error(error);                   
                    
                });
  }
  addclasscss(n) {
    this.shouldShow = n;
    this.isDisabled = n;
  }
  
}
