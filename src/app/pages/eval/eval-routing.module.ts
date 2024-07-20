
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEvalComponent } from './add-eval/add-eval.component';
import { EditEvalComponent } from './edit-eval/edit-eval.component';
import { ListEvalComponent } from './list-eval/list-eval.component';
import { authGuard } from 'src/app/services/auth.guard';


const routes: Routes = [
    {
        path: 'add-eval',
        component: AddEvalComponent,
        canActivate: [authGuard]
      },
      {
        path: 'edit-eval/:id',
        component: EditEvalComponent,
        canActivate: [authGuard]
      },
      {
        path: 'list-eval',
        component: ListEvalComponent,
        canActivate: [authGuard]
      }
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvalRoutingModule { }
