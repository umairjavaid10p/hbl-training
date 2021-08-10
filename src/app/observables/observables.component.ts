import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subscription, Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
    });
    this.userService.clickEvent.subscribe(event => {
      console.log('THi sis a click event', event);
    });
    this.userService.subjectEvent.subscribe(event => {
      console.log('THi sis a subject event', event);
    });
    this.subscriptions.push(
      interval(1000)
      .pipe(
        filter(count => count %2 === 0),
        map(count => `Round # ${count}`),
      )
      .subscribe(value => {
        this.userService.updateEmitter(value);
        this.userService.updateSubject(value);
        // console.log(value);
      }),
      // new Observable(observer => {
      //   let count = 0;
      //   setInterval(() => {
      //     if (count < 4) {
      //       observer.next(count++);
      //     } else if (count === 4) {
      //       observer.complete();
      //     } else {
      //       observer.error('Too Much');
      //     }
      //   }, 1000);
      // })
      // .subscribe(value => {
      //   console.log(value);
      // }, error => {
      //   console.log('My Error', error);
      // }, () => {
      //   console.log('Completed')
      // }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
