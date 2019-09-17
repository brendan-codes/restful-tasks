import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TasksService {

  data;
  // tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private HTTP: HttpClient) {}

  // getTasks() {
  //   const obs = this.HTTP.get('/tasks');
  //   obs.subscribe((data: any[]) => {
  //     this.tasks.next(data);
  //   });
  // }

  // postTask(newTask) {
  //   const obs = this.HTTP.post('/tasks', newTask);
  //   obs.subscribe((data: any[]) => {
  //     this.tasks.next(data);
  //   });
  // }

  getTasks() {
    return this.HTTP.get('/tasks');
  }

  getTaskById(id) {
    return this.HTTP.get(`/tasks/${id}`);
  }

  postTask(data) {
    return this.HTTP.post(`/tasks`, data);
  }

  deleteTask(id) {
    return this.HTTP.delete(`/tasks/${id}`);
  }

  // getTasksThenGetTask() {
  //   const observable = this.HTTP.get('/tasks');
  //   observable.subscribe(data => {
  //     this.tasks = data;
  //     console.log(this.tasks);
  //     this.getTask(data[0]._id);
  //   });
  // }


  // getTask(id) {
  //   const observable = this.HTTP.get(`/tasks/${id}`);
  //   const observerResponses = {
  //     next: data => {
  //       console.log('success data from db', data);
  //     },
  //     err: err => {
  //       console.log('error back from db', err);
  //     },
  //     complete: () => console.log('Observer was completed')
  //   };


  //   observable.subscribe(observerResponses);
  // }

  // createTask(task) {
  //   const taskMap = {
  //     title: task.title,
  //     desc: task.desc
  //   };
  //   const obvs = this.HTTP.post('/tasks/', taskMap);

  //   obvs.subscribe(data => {
  //     console.log(data);
  //   });
  // }

}
