import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = {
    name: "Jerry",
    age: 21,
    gender: 'male',
  };
  clickEvent: EventEmitter<boolean> = new EventEmitter();
  subjectEvent: Subject<boolean> = new Subject();
  constructor() { }

  updateEmitter(value: any) {
    this.clickEvent.emit(value);
  }
  updateSubject(value: any) {
    this.subjectEvent.next(value);
  }
}
