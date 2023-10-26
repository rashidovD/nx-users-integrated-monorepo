import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { ApiService } from "@users/http";
import { UsersAction } from "./users.action";
import { catchError, map, of, switchMap } from "rxjs";


export const loadUsers$ = createEffect(() => {
  const action$ = inject(Actions);
  const apiService = inject(ApiService);

  return action$.pipe(
    ofType(UsersAction.loadUsers),
    switchMap(() => apiService.get('/users')
      .pipe(
        map((users) => {
          return UsersAction.loadUsersSuccess({ users })
        }),
        catchError((error) => {
          console.log('Error in loadUsers$ effects', error)
          return of(error)
        })
      ))
  )
}, {functional: true})
