import { createAction, props, Action  } from "@ngrx/store";
import { Skills } from "../shared/interfaces/skills.interface";
import { HttpErrorResponse } from "@angular/common/http";



export const loadSkills = createAction("[ SKILLS ] Load skills ");

export interface loadSkillsSuccessProperty { 
    payload: Skills[]
}

export const loadSkillsSuccess = createAction(
    "[ SKILLS ] Load skills success", 
props<loadSkillsSuccessProperty>())

export interface addSkillsProperty  {
    skill: Skills,
}

export const addSkills = createAction(
    "[ SKILLS ] add skills",
    props<addSkillsProperty>() 
);

export interface addSKillsSucessProperty { 
    payload: Skills[]
}

export const addSkillsSuccess = createAction(
    "[ SKILLS ] add skills success",
    props<addSKillsSucessProperty>()
)    

export const addSkillsFailure = createAction(
    "[ SKILLS ]  add skills failure",
    props<{error : HttpErrorResponse}>()
)    