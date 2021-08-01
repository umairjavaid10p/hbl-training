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
  constructor() { }
}
