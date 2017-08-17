import {Component} from "@angular/core";
import {TaskService} from "../service/task.service";
import {Task} from "../model/Task";

@Component({
  selector: 'task',
  templateUrl: 'task.component.html'
})
export class TaskComponent {

  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(task => {
      this.tasks = task;
      console.log('TaskComponent.ts');
      console.log(task);
    })
  }

  addTask(event) {
    event.preventDefault();

    var newTask = {
      title: this.title,
      isDone: false
    };

    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.title = '';
    })
  }

  deleteTask(id:number) {
    var tasks = this.tasks;

    this.taskService.deleteTask(id).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id == id) {
            tasks.splice(i, id);
          }
        }
      }
    })
  }

  updateStatus(task:Task) {
    var _task = {
      id: task.id,
      title: task.title,
      isDone: !task.isDone
    };

    this.taskService.updateStatus(_task).subscribe(data => {
      task.isDone = !task.isDone;
    })
  }
}
