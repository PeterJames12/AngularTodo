import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskComponent} from "./task/task.component";
import {HttpModule, BaseRequestOptions} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {routing} from "./app.routing";
import {AuthGuard} from "./_guards/auth.guard";
import {MockBackend} from "@angular/http/testing";
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {AuthenticationService} from "./service/authentication.service";
import {UserService} from "./service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
