import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SkillService } from "../services/skill.service";
import { addSkillsSuccess, addSkillsProperty, addSkills, loadSkills, loadSkillsSuccess } from "./skills.action";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of } from "rxjs";
import { Skills } from '../shared/interfaces/skills.interface';
import { Router } from "@angular/router";

@Injectable()
export class SkillsEffects {
    loadSkills$ = createEffect(() => this.actions$.pipe(
        ofType(loadSkills),
        exhaustMap(() => this.skillsService.getSkills()
        .pipe(
            map((payload: Skills[]) => (loadSkillsSuccess({payload}))),
            catchError(() => EMPTY)
        ))
    ));

    addSkill$ = createEffect(() => this.actions$.pipe(
        ofType(addSkills),
        mergeMap((action : addSkillsProperty) =>
            this.skillsService.createSkill(action.skill).pipe(
                map((newSkill) => 
            {
                this.router.navigate(['/list-skills']); 
                 return addSkillsSuccess({ payload: [newSkill]})
                }),
                catchError((error) => of({ type: '[Skills API] Add Skill Failed', error }))
            )
        )
    ))

    constructor(
        private router: Router, 
        private actions$: Actions,
        private skillsService : SkillService
    ){}
}