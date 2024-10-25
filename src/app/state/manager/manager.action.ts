import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user.interface';

export const loadManagers = createAction("[ MANAGERS ] Load managers");

export interface loadManagersSuccessProperty {
  managers: User[];
}

export const loadManagersSuccess = createAction(
  "[ MANAGERS ] Load managers success",
  props<loadManagersSuccessProperty>()
);

export const loadManagersFailure = createAction(
  "[ MANAGERS ] Load managers failure",
  props<{ error: HttpErrorResponse }>()
);
