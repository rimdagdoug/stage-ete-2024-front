import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadManagers, loadManagersFailure, loadManagersSuccess } from './manager.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class ManagersEffects {
  loadManagers$ = createEffect(() => this.actions$.pipe(
    ofType(loadManagers),
    mergeMap(() => this.userService.getManagers().pipe(
      map(managers => loadManagersSuccess({ managers })),
      catchError(error => of(loadManagersFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService : UserService,
    
  ) {}
}
