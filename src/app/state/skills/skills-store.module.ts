import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SkillsEffects } from "./skills.effects";
import { skillsReducer } from "./skills.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature( 'skills', skillsReducer), 
        EffectsModule.forFeature([SkillsEffects]),

    ],
})
export class SkillsStoreModule{}