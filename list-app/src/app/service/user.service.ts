import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class UserService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService) {

    console.log('User service initialized...');
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('http://localhost:4300/api/user', options)
      .map((response: Response) => response.json());
  }
}
