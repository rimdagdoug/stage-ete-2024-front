import { NgModule } from '@angular/core';

import { AddSkillsComponent } from './add-skills/add-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsRoutingModule } from './skills-routing.module';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import { CommonModule } from '@angular/common';
import { DetailSkillComponent } from './detail-skill/detail-skill.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    AddSkillsComponent,
    EditSkillsComponent,
    ListSkillsComponent,
    DetailSkillComponent,
  ],
  imports: [
    CommonModule,
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
