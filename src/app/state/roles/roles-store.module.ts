import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { rolesReducer } from "./roles.reducer";
import { RolesEffects } from "./roles.effects";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('roles', rolesReducer),
        EffectsModule.forFeature([RolesEffects]),

    ],
})
export class RolesStoreModule{}