import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SkillsRoutingModule } from './pages/skills/skills-routing.module';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SkillsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
