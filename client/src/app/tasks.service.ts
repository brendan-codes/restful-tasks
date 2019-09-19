import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class TasksService {

  data;

  constructor(private HTTP: HttpClient) {}

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

}
