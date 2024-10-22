import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RolesState, SkillsState } from "./skills.reducer";


export const selectSkillsState = createFeatureSelector<SkillsState>('skills')

export const selectAll = createSelector(
    selectSkillsState,
    (state) => state.skills
);


export const selectSelectedSkill = createSelector(
    selectSkillsState,
    (state) => state.selectedSkill 
);

export const selectRolesState = createFeatureSelector<RolesState>('roles');

export const selectAllRoles = createSelector(
  selectRolesState,
  (state) => state.roles
);

