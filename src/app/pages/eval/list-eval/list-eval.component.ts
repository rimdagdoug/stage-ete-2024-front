import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EvalService } from 'src/app/services/eval.service';
import { Evaluation } from 'src/app/shared/interfaces/evaluation.interface';
import { loadEval } from 'src/app/state/eval/eval.action';
import { selectAll } from 'src/app/state/eval/eval.selector';

@Component({
  selector: 'app-list-eval',
  templateUrl: './list-eval.component.html',
  styleUrls: ['./list-eval.component.css']
})
export class ListEvalComponent implements OnInit {
  
  evals: Evaluation[] = [];
  role = localStorage.getItem('role');
  dataSource$: Observable<Evaluation[]> = this.store.select(selectAll);

  constructor(private evalservice: EvalService, private store: Store) {
    this.store.dispatch(loadEval());
  }

  ngOnInit(): void {
    
    this.dataSource$
    .subscribe(
      (result: any) => {
        this.evals = Array.isArray(result) ? result : []; 
      }
    );
  }

}