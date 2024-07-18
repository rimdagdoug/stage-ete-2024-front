import { Component, OnInit } from '@angular/core';
import { EvalService } from 'src/app/services/eval.service';

@Component({
  selector: 'app-list-eval',
  templateUrl: './list-eval.component.html',
  styleUrls: ['./list-eval.component.css']
})
export class ListEvalComponent implements OnInit{
 
  evals: any[]=[];

  constructor(private evalservice:EvalService){}

  ngOnInit(): void {
    this.evalservice.geteval().subscribe(evals=>this.evals=evals);
  }


}
