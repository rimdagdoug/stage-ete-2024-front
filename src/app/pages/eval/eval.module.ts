import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEvalComponent } from './add-eval/add-eval.component';
import { EditEvalComponent } from './edit-eval/edit-eval.component';
import { ListEvalComponent } from './list-eval/list-eval.component';
import { EvalRoutingModule } from './eval-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  declarations: [
    AddEvalComponent,
    EditEvalComponent,
    ListEvalComponent
  ],
  imports: [
    CommonModule,
    EvalRoutingModule,
    FormsModule,
    SharedModule
    
  ],
  exports: [
    AddEvalComponent,
    EditEvalComponent,
    ListEvalComponent
  ],
})
export class EvalModule { }
