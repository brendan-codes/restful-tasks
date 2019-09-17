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

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    // this.tasksService.getTasks();
    // this.tasksService.tasks.subscribe(tasks => this.tasks = tasks);
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
    console.log(this.newTask);

    const obs = this.tasksService.postTask(this.newTask);
    obs.subscribe((newlyCreatedTask: any) => {
      console.log(newlyCreatedTask);
      // this.getTasks();
      this.tasks.push(newlyCreatedTask);
      this.newTask = {
        title: '',
        desc: ''
      };
    });
  }

  deleteTask(id) {
    console.log(id);
    const obs = this.tasksService.deleteTask(id);
    obs.subscribe(data => {
      this.getTasks();
    });
  }



  // checkTasks() {
  //   this.tasks = this.tasksService.tasks.subscribe(tasks => this.tasks = tasks);
  // }

  // submitNewTask() {
  //   console.log(this.task);
  //   this.tasksService.postTask(this.task);
  //   // this.tasksService.tasks.next(this.task);
  //   this.task = {
  //     name: '',
  //     desc: ''
  //   };
  // }



}
