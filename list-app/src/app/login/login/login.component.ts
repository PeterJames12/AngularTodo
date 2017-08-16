import {Component} from "@angular/core";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

   user: User[];

  constructor(private userService: UserService) {
    userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
