import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EvaluationState } from "./eval.reducer";

export const selectEvaluationState = createFeatureSelector<EvaluationState>('evaluation')

export const selectAll = createSelector(
    selectEvaluationState,
    (state) => state.evaluation
)

export const selectNotesEvals = createSelector(
    selectEvaluationState,
    (state) => state.notesEvals 
);

export const selectFinalNote = createSelector(
    selectEvaluationState,
    (state) => state.finalScore
)