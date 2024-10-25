import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeveloperState } from './developer.reducer';


export const selectDevelopersState  = createFeatureSelector<DeveloperState>('developers');

export const selectAllDevelopers = createSelector(
  selectDevelopersState ,
  (state) => state.developers
);
