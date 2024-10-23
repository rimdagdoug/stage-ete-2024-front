// roles.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadRoles, loadRolesSuccess, loadRolesFailure } from './roles.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { SkillService } from 'src/app/services/skill.service';

@Injectable()
export class RolesEffects {
  loadRoles$ = createEffect(() => this.actions$.pipe(
    ofType(loadRoles),
    mergeMap(() => this.skillService.getRoles().pipe(
      map(roles => loadRolesSuccess({ roles })),
      catchError(error => of(loadRolesFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private skillService: SkillService
    
  ) {}
}
