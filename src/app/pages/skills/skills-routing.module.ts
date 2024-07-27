import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import { DetailSkillComponent } from './detail-skill/detail-skill.component';
import { authGuard } from 'src/app/shared/guard/auth.guard';
import { roleGuard } from 'src/app/shared/guard/role.guard';

const routes: Routes = [
  {
    path: 'add-skills',
    component: AddSkillsComponent,
    canActivate: [authGuard, roleGuard],
    
  },
  {
    path: 'edit-skills/:id',
    component: EditSkillsComponent,
    canActivate: [authGuard, roleGuard]
  },
  {
    path: 'list-skills',
    component: ListSkillsComponent,
    canActivate: [authGuard, roleGuard]
  },
  {  path: 'detail-skill/:id',
    component: DetailSkillComponent,
    canActivate: [authGuard, roleGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }