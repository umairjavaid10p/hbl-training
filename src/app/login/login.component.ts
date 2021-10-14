import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private userService: UsersService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['george.bluth@reqres.in', Validators.required],
      password: ['pistol', Validators.required],
    });
  }

  login() {
    const value = this.loginForm?.value;
    this.userService.login(value).then(token => {
      localStorage.setItem('token', token);
      this.userService.token = token;
      this.userService.userLoggedInEvent.next(true);
    })
    .then(() => this.userService.getUserDetails())
    .then(user => {
      this.userService.user = user;
      this.userService.userFetchedEvent.next();
    })
    .then(() => {
      this.router.navigate(['/products']);
    });
  }

}
