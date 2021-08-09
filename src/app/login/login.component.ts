import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersService } from '../users.service';
import * as authActions from '../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  loader: boolean = false;
  constructor(
    private userService: UsersService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(auth => {
      this.user = auth.loggedInUser;
      this.loader = auth.isLoading;
    });
  }

  login() {
    this.store.dispatch(authActions.login());
  }

}
