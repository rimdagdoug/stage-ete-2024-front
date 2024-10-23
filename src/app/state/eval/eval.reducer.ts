import { createReducer, on } from "@ngrx/store";
import { Evaluation } from "src/app/shared/interfaces/evaluation.interface";
import { loadEval, loadEvalSuccess } from "./eval.action";

export interface EvaluationState {
    evaluation: Evaluation[];
}

export const initState: EvaluationState = {
    evaluation: [],
};

export const evaluationReducer = createReducer(
    initState,
    on(loadEval, (state) => ({
        ...state,
        evaluation: []
    })),
    on(loadEvalSuccess, (state, { evaluation }) => ({
        ...state,
        evaluation: evaluation
    })),
)