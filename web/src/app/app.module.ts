import { BrowserModule } from "@angular/platform-browser";
import { NgModule,Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TableListComponent } from "./table-list/table-list.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";
import { MapsComponent } from "./maps/maps.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

import { AlertComponent } from "./_directives/index";
import { AuthGuard } from "./_guards/index";
import {
  JwtInterceptorProvider,
  ErrorInterceptorProvider
} from "./_helpers/index";
import {
 AlertService,
  AuthenticationService,
  UserService
} from "./_services/index";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [       
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    RegistrationComponent,    
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,   
   Ng4LoadingSpinnerModule
  ],
  providers: [
    AuthGuard,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
    AlertService,
    AuthenticationService,
    UserService,
   // Ng4LoadingSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

