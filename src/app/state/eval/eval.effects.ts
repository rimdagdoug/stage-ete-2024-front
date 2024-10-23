import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EvalService } from "src/app/services/eval.service";
import { loadEval, loadEvalFailure, loadEvalSuccess } from "./eval.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Evaluation } from '../../shared/interfaces/evaluation.interface';

@Injectable()
export class EvalEffects {
    loadEval$ = createEffect(() => this.actions$.pipe(
        ofType(loadEval),
        exhaustMap(() => this.evalService.geteval()
        .pipe(
          //  map(eval: Evaluation[]) => loadEvalSuccess({eval}),
          map((evaluation: Evaluation[]) => (loadEvalSuccess({evaluation}))),
            catchError((error) => of(loadEvalFailure({ error })))

        )
    )
    ))


    constructor(
        private actions$: Actions,
        private evalService : EvalService
    ){}
}