import { Component } from '@angular/core';
import {TaskService} from "./service/task.service";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService, UserService]
})
export class AppComponent {
  title = 'app';
}
