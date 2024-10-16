import { createReducer, on } from "@ngrx/store";
import { Skills } from "../shared/interfaces/skills.interface";
import * as Actions from "./skills.action";

export const initState: {skills: Skills[]} = {
    skills: [
      ]
};

export const skillsReducer = createReducer(
    initState,
    on(Actions.loadSkillsSuccess, (state, { payload}) => ({...state, skills: payload}))
)