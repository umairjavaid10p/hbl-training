import { Action, createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';
 
export interface CounterState {
    count: number;
}

export const initialState: CounterState = {
    count: 0,
};
 
const _counterReducer = createReducer(
  initialState,
  on(counterActions.increment, (state) => ({
    count: state.count + 1,
  })),
  on(counterActions.decrement, (state) => ({
    count: state.count - 1,
  })),
  on(counterActions.reset, (state) => ({
      count: 0
  }))
);
 
export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}