import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { evaluationReducer } from "./eval.reducer";
import { EvalEffects } from "./eval.effects";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('evaluation',evaluationReducer ),
        EffectsModule.forFeature([EvalEffects])
    ],
})
export class EvalsStoreModule{}