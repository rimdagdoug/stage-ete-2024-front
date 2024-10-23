import { createReducer, on } from "@ngrx/store";
import { Skills } from "../../shared/interfaces/skills.interface";
import * as Actions from "./skills.action";

export interface SkillsState {
    skills: Skills[];
    selectedSkill: Skills | null; 
}

export const initState: SkillsState = {
    skills: [],
    selectedSkill: null, 
};

export const skillsReducer = createReducer(
    initState,
    on(Actions.loadSkills, (state) => ({
        ...state,
        skills: []
    })),
    on(Actions.loadSkillsSuccess, (state, { payload }) => ({
        ...state,
        skills: payload
    })),
    
    on(Actions.detailSkill, (state) => ({
        ...state,
        selectedSkill: null 
    })),
    
    on(Actions.detailSkillSuccess, (state, { skill }) => ({
        ...state,
        selectedSkill: skill 
    })),

    on(Actions.detailSkillFailure, (state, { error }) => ({
        ...state,
        selectedSkill: null, 
        error
    }))
);

export interface RolesState {
    roles: string[];
  }
  
  export const initialRolesState: RolesState = {
    roles: []
  };

