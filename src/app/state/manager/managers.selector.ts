import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagersState } from './managers.reducer';


export const selectManagersState  = createFeatureSelector<ManagersState>('managers');

export const selectAllManagers = createSelector(
  selectManagersState ,
  (state) => state.managers
);
