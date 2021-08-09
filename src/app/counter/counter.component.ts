import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app.reducer';
import * as counterActions from '../store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: any;

  constructor(
    private store: Store<AppStore>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(co => {
      this.counter = co;
    });
  }

  increment() {
    this.store.dispatch(counterActions.increment());
  }
 
  decrement() {
    this.store.dispatch(counterActions.decrement());
  }
 
  reset() {
    this.store.dispatch(counterActions.reset());
  }

}
