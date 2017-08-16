import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskComponent} from "./task/task.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
