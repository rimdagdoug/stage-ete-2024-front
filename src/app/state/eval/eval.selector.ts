import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EvaluationState } from "./eval.reducer";

export const selectEvaluationState = createFeatureSelector<EvaluationState>('evaluation')

export const selectAll = createSelector(
    selectEvaluationState,
    (state) => state.evaluation
)