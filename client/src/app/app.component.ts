import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  tasks;
  task: any = {
    title: '',
    desc: ''
  };

  newTask: any = {
    title: '',
    desc: ''
  };

  success = '';

  errors = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.getTasks();
    this.getTaskById('5d7aacaef54421bd700ca9cd');
  }

  getTasks() {
    const obs = this.tasksService.getTasks();
    obs.subscribe(data => {
      console.log(data);
      this.tasks = data;
    });
  }

  getTaskById(id) {
    const obs = this.tasksService.getTaskById(id);
    obs.subscribe(data => {


      console.log(data);
      this.task = data;

    });
  }

  createTask() {
    const obs = this.tasksService.postTask(this.newTask);
    obs.subscribe((data: any) => {
      this.getTasks();
      this.newTask = {
        title: '',
        desc: ''
      };

      if (data.err) {
        console.log('This was an error', data);
        this.errors = data.errors;
        this.success = '';
      } else {
        console.log('this was success', data);
        this.success = 'You created a message!';
      }
    });
  }

  deleteTask(id) {
    console.log(id);
    const obs = this.tasksService.deleteTask(id);
    obs.subscribe(data => {
      this.getTasks();
      this.success = '';
    });
  }



}
