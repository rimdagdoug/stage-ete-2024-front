import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEvalComponent } from './add-eval/add-eval.component';
import { EditEvalComponent } from './edit-eval/edit-eval.component';
import { ListEvalComponent } from './list-eval/list-eval.component';
import { EvalRoutingModule } from './eval-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CompleteEvalComponent } from './complete-eval/complete-eval.component';
import { DetailEvalComponent } from './detail-eval/detail-eval.component';
import { EvalsStoreModule } from 'src/app/state/eval/evals-store.module';
import { ManagersStoreModule } from 'src/app/state/manager/manager-store.module';
import { DeveloperStoreModule } from 'src/app/state/developer/developer-store.module';





@NgModule({
  declarations: [
    AddEvalComponent,
    EditEvalComponent,
    ListEvalComponent,
    CompleteEvalComponent,
    DetailEvalComponent,
   
  ],
  imports: [
    CommonModule,
    EvalsStoreModule,
    EvalRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ManagersStoreModule,
    DeveloperStoreModule
    
  ],
  exports: [
    AddEvalComponent,
    EditEvalComponent,
    ListEvalComponent
  ],
})
export class EvalModule { }
