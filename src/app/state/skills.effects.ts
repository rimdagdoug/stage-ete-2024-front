import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SkillService } from "../services/skill.service";
import { actionsList } from "./skills.action";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { Skills } from '../shared/interfaces/skills.interface';

@Injectable()
export class SkillsEffects {
    loadSkills$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.loadSkills),
        exhaustMap(() => this.skillsService.getSkills()
        .pipe(
            map((skills: Skills[]) => ({type: actionsList.loadSkillsSuccess, payload: skills})),
            catchError(() => EMPTY)
        ))
    ));

    constructor(
        private actions$: Actions,
        private skillsService : SkillService
    ){}
}