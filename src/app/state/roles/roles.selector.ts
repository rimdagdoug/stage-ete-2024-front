// roles.selector.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RolesState } from './roles.reducer';

export const selectRolesState = createFeatureSelector<RolesState>('roles');

export const selectAllRoles = createSelector(
  selectRolesState,
  (state) => state.roles
);
