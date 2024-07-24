import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import { DetailSkillComponent } from './detail-skill/detail-skill.component';
import { authGuard } from 'src/app/services/auth.guard';
import { roleGuardGuard } from 'src/app/services/role-guard.guard';

const routes: Routes = [
  {
    path: 'add-skills',
    component: AddSkillsComponent,
    canActivate: [authGuard,roleGuardGuard],
    
  },
  {
    path: 'edit-skills/:id',
    component: EditSkillsComponent,
    canActivate: [authGuard,roleGuardGuard]
  },
  {
    path: 'list-skills',
    component: ListSkillsComponent,
    canActivate: [authGuard,roleGuardGuard]
  },
  {  path: 'detail-skill/:id',
    component: DetailSkillComponent,
    canActivate: [authGuard,roleGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }