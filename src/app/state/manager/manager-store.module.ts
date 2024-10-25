import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { managersReducer } from "./managers.reducer";
import { ManagersEffects } from "./manager.effects";


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('managers', managersReducer),
         EffectsModule.forFeature([ManagersEffects]),

    ],
})
export class ManagersStoreModule{}