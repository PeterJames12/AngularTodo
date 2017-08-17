import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Task} from "../model/Task";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class TaskService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
    console.log('Task service initialized...');
  }

  getTasks() {
    return this.http.get('http://localhost:4300/api/tasks').map(res => res.json());
  }

  addTask(task: Task) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4300/api/task', JSON.stringify(task), {headers: headers})
      .map(res => res.json());
  }

  deleteTask(id:number) {
    return this.http.delete('http://localhost:4300/api/task/' + id).map(res => res.json());
  }

  updateStatus(task:Task) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:4300/api/task/' + task.id, JSON.stringify(task), {headers: headers})
      .map(res => res.json());
  }
}
