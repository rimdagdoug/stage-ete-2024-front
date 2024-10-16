import { createSelector } from "@ngrx/store";
import { Skills } from "../shared/interfaces/skills.interface";

export interface AppState {
    skills: Skills[];
}

export const selectFeature = (state: AppState) => state.skills;

export const selectAll = createSelector(
    selectFeature,
    (state: Skills[]) => state
);

