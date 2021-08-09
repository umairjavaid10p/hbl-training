import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';
 
export interface AuthState {
    loggedInUser: Object | undefined;
    isLoading: boolean;
}

export const initialState: AuthState = {
    loggedInUser: undefined,
    isLoading: false,
};
 
const _authReducer = createReducer(
  initialState,
  on(authActions.login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(authActions.setLoggedInUser, (state, action) => ({
    ...state,
    loggedInUser: action.user,
    isLoading: false,
  })),
);
 
export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}