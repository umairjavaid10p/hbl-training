import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] login');

export const setLoggedInUser = createAction(
    '[Auth] SetLoggedInUser',
    props<{
        user: Object
    }>()
);