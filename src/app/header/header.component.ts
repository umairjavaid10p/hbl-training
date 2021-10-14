import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: IUser | undefined;
  userLoggedIn = false;

  constructor(
    private router: Router,
    private userService: UsersService,
  ) { }

  ngOnInit() {
    this.user = this.userService.user;
    if (this.userService.token) {
      this.userLoggedIn = true;
    }
    this.userService.userLoggedInEvent.subscribe(() => {
      this.userLoggedIn = true;
    });
    this.userService.userFetchedEvent.subscribe(() => {
      this.user = this.userService.user;
    });
  }

  logOut() {
    this.userLoggedIn = false;
    this.userService.user = undefined;
    this.userService.token = undefined;
    localStorage.removeItem('token');
    this.user = undefined;
    this.router.navigate(['/login']);
  }

}
