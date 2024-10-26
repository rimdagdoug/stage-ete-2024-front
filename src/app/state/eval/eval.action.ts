import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { EvaluationInfo } from "src/app/shared/interfaces/evaluation-info.interface";
import { Evaluation } from "src/app/shared/interfaces/evaluation.interface";
import { notes } from "src/app/shared/interfaces/notes.interface";


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
);

export interface addEvalProperty {
    evaluation: Evaluation
}

export const addEval = createAction(
    "[ EVAL ] add eval",
    props<addEvalProperty>()
)

export interface addEvalSuccessProperty {
    evaluation: Evaluation[]
}

export const addEvalSuccess = createAction(
    "[ EVAL ] add eval success",
    props<addEvalSuccessProperty>()
)

export const addEvalFailure = createAction(
    "[ EVAL ]  add eval failure",
    props<{error : HttpErrorResponse}>()
)

export interface detailEvalProperty {
    id: number;
}

export const detailEval = createAction(
    "[ EVAL ] deatil eval",
    props<detailEvalProperty>()
);

export interface detailEvalSuccessProperty {
    notes: notes[],
}

export const detailEvalSuccess = createAction(
    "[ EVAL ] detail eval success",
    props<detailEvalSuccessProperty>()
);

export const detailEvalFailure = createAction(
    "[ EVAL] detail eval failure",
    props<{error : HttpErrorResponse}>()
)

export interface finalScoreProperty {
    id: number;
}

export const finalScore = createAction(
    "[ FINALSCORE ] final score",
    props<finalScoreProperty>()
);

export interface finalScoreSuccessProperty {
    finalScore: number
}

export const finalScoreSuccess = createAction(
    "[ FINALSCORE ] final score success",
    props<finalScoreSuccessProperty>()
);

export const finalScoreFailure = createAction(
    "[ FINALSCORE ] final score failure",
    props<{error : HttpErrorResponse}>()
)

export interface initialiseFormProperty {
    id: number;
}

export const initialiseForm = createAction(
    "[INITIALFORM] initialiseForm ",
    props<initialiseFormProperty>()
)

export interface initialiseFormSuccessProperty {
    evals: EvaluationInfo[];
}

export const initialiseFormSuccess = createAction(
    "[ INITIALFORM ] initialiseForm success",
    props<initialiseFormSuccessProperty>()
);

export const initialiseFormFailure = createAction(
    "[ INITIALFORM ] initialiseForm failure",
    props<{error : HttpErrorResponse}>()
)