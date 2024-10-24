import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EvalService } from "src/app/services/eval.service";
import { addEval, addEvalProperty, addEvalSuccess, loadEval, loadEvalFailure, loadEvalSuccess } from "./eval.action";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { Evaluation } from '../../shared/interfaces/evaluation.interface';
import { Router } from "@angular/router";

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
    ))


    constructor(
        private actions$: Actions,
        private evalService : EvalService,
        private router: Router, 
    ){}
}