import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SkillsEffects } from "./skills.effects";
import { skillsReducer } from "./skills.reducer";
import { rolesReducer } from "./roles.reducer";
import { RolesEffects } from "./roles.effects";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature( 'skills', skillsReducer), 
        EffectsModule.forFeature([SkillsEffects]),
        StoreModule.forFeature('roles', rolesReducer),
        EffectsModule.forFeature([RolesEffects])
    ],
})
export class SkillsStoreModule{}