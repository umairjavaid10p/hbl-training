import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { switchMap, tap, map } from 'rxjs/operators'



@Injectable()
export class AuthEffects {

  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(() => {
          console.log('HERE');
          return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
          .pipe(
              map((user: any) => authActions.setLoggedInUser({ user })),
            // catchError(errorRes => {
            //   return handleError(errorRes);
            // })
          );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}