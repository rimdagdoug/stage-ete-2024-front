import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EvalService } from "src/app/services/eval.service";
import { addEval, addEvalProperty, addEvalSuccess, detailEval, detailEvalFailure, detailEvalSuccess, finalScore, finalScoreFailure, finalScoreSuccess, loadEval, loadEvalFailure, loadEvalSuccess } from "./eval.action";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { Evaluation } from '../../shared/interfaces/evaluation.interface';
import { Router } from "@angular/router";
import { notes } from "src/app/shared/interfaces/notes.interface";
import { User } from "src/app/shared/interfaces/user.interface";

@Injectable()
export class EvalEffects {
    loadEval$ = createEffect(() => this.actions$.pipe(
        ofType(loadEval),
        exhaustMap(() => this.evalService.geteval()
        .pipe(

          map((evaluation: Evaluation[]) =>
          {
            console.log(evaluation);
         return   loadEvalSuccess({evaluation})
        }
        ),
            catchError((error) => of(loadEvalFailure({ error })))

        )
    )
    ));

    addEval$ = createEffect(() => this.actions$.pipe(
        ofType(addEval),
        mergeMap((action: addEvalProperty) => 
            this.evalService.createeval(action.evaluation).pipe(
                map((evaluation) =>
                  {
                    this.router.navigate(['/list-eval']);
                    return addEvalSuccess({ evaluation: [evaluation]})
                  }),
                  catchError((error) => of ({type: '[ EVAL ]  add eval failure', error}))
             
            )
        )
    ));

    detailEval$ = createEffect(() => this.actions$.pipe(
        ofType(detailEval),
        mergeMap((action) =>
            this.evalService.getResultatEvaluationByIdEval(action.id).pipe(
                map((notes: notes[]) => detailEvalSuccess({ notes })),
                catchError((error) => of(detailEvalFailure({ error })))
            )
        )
    ));

    finalScore$ = createEffect(() => this.actions$.pipe(
        ofType(finalScore),
        mergeMap((action) => 
            
{
    console.log(action);
    return            this.evalService.getFinalScore(action.id).pipe(
                map((finalScore: number) => finalScoreSuccess({finalScore})),
                catchError((error) => of(finalScoreFailure({error})))
            )}
        )
    ))


    constructor(
        private actions$: Actions,
        private evalService : EvalService,
        private router: Router, 
    ){}
}