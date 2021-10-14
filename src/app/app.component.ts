import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-course';

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.token = token;
      this.getUserDetails();
    }
  }

  getUserDetails() {
    this.userService.getUserDetails().then(user => {
      this.userService.user = user;
      this.userService.userFetchedEvent.next();
    });
  }
 }
