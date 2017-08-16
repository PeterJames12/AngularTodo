import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Task} from "../model/Task";
import {headersToString} from "selenium-webdriver/http";
import {getUrlScheme} from "@angular/compiler";

@Injectable()
export class UserService {

  constructor(private http: Http) {

    console.log('User service initialized...');
  }

  getUser() {
    return this.http.get('http://localhost:4300/api/user/get').map(res => res.json());
  }
}
