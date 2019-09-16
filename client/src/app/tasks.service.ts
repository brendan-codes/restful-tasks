import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class TasksService {

  tasks: any;


  constructor(private HTTP: HttpClient) {
    // this.getTasks();
    this.getTasksThenGetTask();

    // this.getTask(this.tasks[0]._id);
  }

  getTasks() {
    const observable = this.HTTP.get('/tasks');
    observable.subscribe(data => {
      this.tasks = data;
    });
  }

  getTasksThenGetTask() {
    const observable = this.HTTP.get('/tasks');
    observable.subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
      this.getTask(data[0]._id);
    });
  }


  getTask(id) {
    const observable = this.HTTP.get(`/tasks/${id}`);
    const observerResponses = {
      next: data => {
        console.log('success data from db', data);
      },
      err: err => {
        console.log('error back from db', err);
      },
      complete: () => console.log('Observer was completed')
    };


    observable.subscribe(observerResponses);
  }

  createTask(task) {
    const taskMap = {
      title: task.title,
      desc: task.desc
    };
    const obvs = this.HTTP.post('/tasks/', taskMap);

    obvs.subscribe(data => {
      console.log(data);
    });
  }


