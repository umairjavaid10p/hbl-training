import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = {
    name: "Jerry",
    age: 21,
    gender: 'male',
  };
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get('assets/users.json');
  }
}
