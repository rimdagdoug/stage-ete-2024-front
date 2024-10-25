import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user.interface';

export const loadDeveloper = createAction("[ DEVELOPER ] Load developers");

export interface loadDeveloperSuccessProperty {
  developers: User[];
}

export const loadDeveloperSuccess = createAction(
  "[ DEVELOPER ] Load developers success",
  props<loadDeveloperSuccessProperty>()
);

export const loadDeveloperFailure = createAction(
  "[ DEVELOPER ] Load developers failure",
  props<{ error: HttpErrorResponse }>()
);
