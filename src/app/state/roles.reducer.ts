// roles.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadRolesSuccess } from './roles.action';

export interface RolesState {
  roles: string[];
}

export const initialRolesState: RolesState = {
  roles: []
};

export const rolesReducer = createReducer(
  initialRolesState,
  on(loadRolesSuccess, (state, { roles }) => ({
    ...state,
    roles
  }))
);
