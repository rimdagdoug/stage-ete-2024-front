import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SkillsRoutingModule } from './pages/skills/skills-routing.module';
import { EvalRoutingModule } from './pages/eval/eval-routing.module';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SkillsRoutingModule,EvalRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
