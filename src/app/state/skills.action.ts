import { createAction, props } from "@ngrx/store";
import { Skills } from "../shared/interfaces/skills.interface";


export const actionsList = {
    loadSkills: "[ Skills Table Component ] Load skills ",
    loadSkillsSuccess: "[ Load skills success]"
};

export const loadSkills = createAction(actionsList.loadSkills);
export const loadSkillsSuccess = createAction(
    actionsList.loadSkillsSuccess, 
    props<{ payload: Skills[]}>())