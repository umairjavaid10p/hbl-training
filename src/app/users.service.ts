import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = {
    name: "Jerry",
    age: 21,
    gender: 'male',
  };
  constructor(private http: HttpClient) {
    
  }
  
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
