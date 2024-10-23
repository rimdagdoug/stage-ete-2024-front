import { NgModule } from '@angular/core';

import { AddSkillsComponent } from './add-skills/add-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsRoutingModule } from './skills-routing.module';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import { CommonModule } from '@angular/common';
import { DetailSkillComponent } from './detail-skill/detail-skill.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SkillsStoreModule } from 'src/app/state/skills/skills-store.module';
import { RolesStoreModule } from 'src/app/state/roles/roles-store.module';

@NgModule({
  declarations: [
    AddSkillsComponent,
    EditSkillsComponent,
    ListSkillsComponent,
    DetailSkillComponent,
  ],
  imports: [
    CommonModule,
    SkillsStoreModule,
    RolesStoreModule,
    SkillsRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AddSkillsComponent,
    EditSkillsComponent,
    ListSkillsComponent,
  ],
  
})
export class SkillsModule { }
