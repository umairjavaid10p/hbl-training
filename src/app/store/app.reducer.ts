import * as auth from './auth/auth.reducer';
import * as counter from './counter/counter.reducer';

export interface AppStore {
    auth: auth.AuthState;
    counter: counter.CounterState;
}

export const appReducer = {
    auth: auth.authReducer,
    counter: counter.counterReducer,
};