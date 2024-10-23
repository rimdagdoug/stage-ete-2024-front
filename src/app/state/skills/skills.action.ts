import { createAction, props, Action  } from "@ngrx/store";
import { Skills } from "../../shared/interfaces/skills.interface";
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

export interface updateSkillProperty {
    id: number;
    skill: Skills
}

export const updateSkill = createAction(
    "[ SKILLS ] update skill",
    props<updateSkillProperty>()
);

export interface updateSkillSuccessProperty {
    payload: Skills[]
}

export const updateSkillSuccess = createAction(
    "[ SKILLS ] update skill success",
    props<updateSkillSuccessProperty>()
);


export const updateSkillsFailure = createAction(
    "[ SKILLS] update skills failure",
    props<{error : HttpErrorResponse}>()
)

export interface detailSkillProperty {
    id: number;
}

export const detailSkill = createAction(
    "[ SKILLS ] deatil skill",
    props<detailSkillProperty>()
);

export interface detailSkillSuccessProperty {
    skill: Skills
}

export const detailSkillSuccess = createAction(
    "[ SKILLS ] detail skill success",
    props<detailSkillSuccessProperty>()
);

export const detailSkillFailure = createAction(
    "[ SKILLS] detail skills failure",
    props<{error : HttpErrorResponse}>()
)

