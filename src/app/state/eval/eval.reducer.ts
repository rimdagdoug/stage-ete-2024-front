import { createReducer, on } from "@ngrx/store";
import { Evaluation } from "src/app/shared/interfaces/evaluation.interface";
import { detailEval, detailEvalFailure, detailEvalSuccess, finalScore, finalScoreFailure, finalScoreSuccess, initialiseForm, initialiseFormSuccess, loadEval, loadEvalSuccess } from "./eval.action";
import { notes } from "src/app/shared/interfaces/notes.interface";
import { EvaluationInfo } from "src/app/shared/interfaces/evaluation-info.interface";


export interface EvaluationState {
    evaluation: Evaluation[];
    notesEvals: notes [] | null;
    finalScore?: number ;
    evals: EvaluationInfo[] 
    
}

export const initState: EvaluationState = {
    evaluation: [],
    notesEvals: null,
    finalScore: undefined,
    evals: []
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
    on(detailEval, (state) => ({
        ...state,
        notesEvals: null 
    })),
    
    on(detailEvalSuccess, (state, { notes }) => ({
        ...state,
        notesEvals: notes 
    })),

    on(detailEvalFailure, (state, { error }) => ({
        ...state,
        notesEvals: null, 
        error
    })),
    on(finalScore, (state) => ({
        ...state,
        finalScore:undefined
    })),
    on(finalScoreSuccess, (state, {finalScore}) => ({
        ...state,
        finalScore: finalScore
    })),
    on(finalScoreFailure, (state, { error }) => ({
        ...state,
        finalScore: undefined, 
        error
    })),

    on(initialiseForm, (state) => ({
        ...state,
        evals: [] 
    })),
    
    on(initialiseFormSuccess, (state, { evals }) => ({
        ...state,
        evals: evals 
    })),

    on(detailEvalFailure, (state, { error }) => ({
        ...state,
        evals: [], 
        error
    })),

)