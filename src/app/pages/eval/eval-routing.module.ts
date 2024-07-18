
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEvalComponent } from './add-eval/add-eval.component';
import { EditEvalComponent } from './edit-eval/edit-eval.component';
import { ListEvalComponent } from './list-eval/list-eval.component';


const routes: Routes = [
    {
        path: 'add-eval',
        component: AddEvalComponent
      },
      {
        path: 'edit-eval/:id',
        component: EditEvalComponent
      },
      {
        path: 'list-eval',
        component: ListEvalComponent
      }
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvalRoutingModule { }
