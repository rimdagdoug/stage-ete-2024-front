import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import { DetailSkillComponent } from './detail-skill/detail-skill.component';

const routes: Routes = [
  {
    path: 'add-skills',
    component: AddSkillsComponent
  },
  {
    path: 'edit-skills/:id',
    component: EditSkillsComponent
  },
  {
    path: 'list-skills',
    component: ListSkillsComponent
  },
  {  path: 'detail-skill/:id',
    component: DetailSkillComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }