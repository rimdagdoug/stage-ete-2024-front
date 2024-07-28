import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SkillsRoutingModule } from './pages/skills/skills-routing.module';
import { EvalRoutingModule } from './pages/eval/eval-routing.module';
import { authGuard } from './shared/guard/auth.guard';
import { ListEvalComponent } from './pages/eval/list-eval/list-eval.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'', 
    redirectTo :'login', 
    pathMatch:'full'},
  {
    path: 'list-eval',
    component: ListEvalComponent,
    canActivate: [authGuard]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SkillsRoutingModule,EvalRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
