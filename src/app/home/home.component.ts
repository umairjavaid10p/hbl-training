import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: IUser | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

}
