// roles.action.ts
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadRoles = createAction("[ ROLES ] Load roles");

export interface loadRolesSuccessProperty {
  roles: string[];
}

export const loadRolesSuccess = createAction(
  "[ ROLES ] Load roles success",
  props<loadRolesSuccessProperty>()
);

export const loadRolesFailure = createAction(
  "[ ROLES ] Load roles failure",
  props<{ error: HttpErrorResponse }>()
);
