import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadDeveloper, loadDeveloperFailure, loadDeveloperSuccess } from './developer.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class DeveloperEffects {
  loadDeveloper$ = createEffect(() => this.actions$.pipe(
    ofType(loadDeveloper),
    mergeMap(() => this.userService.getDevelopers().pipe(
      map(developers => loadDeveloperSuccess({ developers })),
      catchError(error => of(loadDeveloperFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService : UserService,
    
  ) {}
}
