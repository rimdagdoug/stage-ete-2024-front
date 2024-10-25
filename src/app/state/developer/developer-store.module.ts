import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { developerReducer } from "./developer.reducer";
import { DeveloperEffects } from "./developer.effects";


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('developers', developerReducer),
        EffectsModule.forFeature([DeveloperEffects]),

    ],
})
export class DeveloperStoreModule{}