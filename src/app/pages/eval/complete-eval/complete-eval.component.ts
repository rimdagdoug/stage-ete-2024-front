import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EvalService } from 'src/app/services/eval.service';
import { EvaluationInfo } from 'src/app/shared/interfaces/evaluation-info.interface';
import { initialiseForm } from 'src/app/state/eval/eval.action';
import { selectInitialForm } from 'src/app/state/eval/eval.selector';


@Component({
  selector: 'app-complete-eval',
  templateUrl: './complete-eval.component.html',
  styleUrls: ['./complete-eval.component.css']
})
export class CompleteEvalComponent implements OnInit{
  firstname: string | null;
  lastname: string | null;
  evalForm: FormGroup  = new FormGroup({
    evaluationId: new FormControl(""),
    skills: new FormArray([], Validators.required) 
  })
  idEval : number = 0;
  evals: EvaluationInfo[] = [ {} as EvaluationInfo];
  initialForm$ : Observable< EvaluationInfo [] > = this.store.select(selectInitialForm);
  constructor(
    private evalservice: EvalService,
    private route:ActivatedRoute,
    private router: Router,
    private store: Store
  ){
      this.firstname = localStorage.getItem('firstname');
      this.lastname = localStorage.getItem('lastname');
    }

  ngOnInit(): void {
   this.route.params.subscribe(params=> {
    const id = params['id'];
    this.idEval = id;
    this.initialiseForms(id);
   })
  }

  initialiseForms(id: number): void{
    this.store.dispatch(initialiseForm({id : this.idEval}));
    
           this.evalForm.controls['evaluationId'].setValue(id);
           this.initialForm$.subscribe(evals => {
            evals.forEach((item: any) => {
                this.addSkills(item);
            });
        });
  
  }

  addSkills(item : any) {

    const control = <FormArray>this.evalForm.controls['skills'];
    control.push(
      new FormGroup({
        skillId: new FormControl(item.skills.id),
        name: new FormControl(item.skills.name),
        description: new FormControl(item.skills.description),

        note: new FormControl('', [Validators.required, Validators.min(0)]) 
      })
    );
  }

  get skillsArray(): FormArray {
    return this.evalForm.get('skills') as FormArray;
  }

  onSubmit(){
    this.evalservice.noteInput(this.evalForm.value).subscribe(
      evaluation => {
            if(localStorage.getItem('role') == 'RH'){
              this.evalservice.getFinalScore(this.idEval).subscribe(
                score => {
                  this.router.navigate(['/list-eval'])
                },
                error => {
                  console.error('Error fetching final score', error);
                }
              )
            }else {
                this.router.navigate(['/list-eval'])
              
            }

      }, (error: HttpErrorResponse) => console.warn(error)
    )
  }



}
