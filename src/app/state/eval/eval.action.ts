import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Evaluation } from "src/app/shared/interfaces/evaluation.interface";

export const loadEval = createAction("[ EVAL ] Load eval");

export interface loadEvalSuccessProperty {
    evaluation: Evaluation[]
}

export const loadEvalSuccess = createAction(
    "[ EVAL ] Load eval",
    props<loadEvalSuccessProperty>()
)

export const loadEvalFailure = createAction(
    "[ EVAL ] Load eval",
    props<{error : HttpErrorResponse}>()
)