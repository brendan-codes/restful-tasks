import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  name = 'Brendan';
  email = "brendan@email.com";
  constructor(private _tasksService: TasksService) {


  }



}
