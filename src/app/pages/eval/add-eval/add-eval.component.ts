import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EvalService } from 'src/app/services/eval.service';
import { UserService } from 'src/app/services/user.service';
import { Evaluation } from 'src/app/shared/interfaces/evaluation.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
import { addEval } from 'src/app/state/eval/eval.action';
import { EvaluationState } from 'src/app/state/eval/eval.reducer';

@Component({
  selector: 'app-add-eval',
  templateUrl: './add-eval.component.html',
  styleUrls: ['./add-eval.component.css']
})
export class AddEvalComponent {

  managers: User[] = [];
  developers: User[] = [];
  errorMessage: string = '';

  constructor(
    private evalService: EvalService,
    private userService: UserService,
    private router: Router,
    private store: Store<EvaluationState>
  ) {
    this.getManagers();
    this.getDevelopers();
  }

  evaluation: Evaluation = {
    
    developerId: '0',
    managerId: '0',
    status: '',
    finalNote: 0, 
    developer: { id: 0, firstname: '', lastname: '', email: '', password: '', username: '', role: '', enabled: false, accountNonExpired: false, credentialsNonExpired: false, accountNonLocked: false, authorities: [] }, // Placeholder for developer
    manager: { id: 0, firstname: '', lastname: '', email: '', password: '', username: '', role: '', enabled: false, accountNonExpired: false, credentialsNonExpired: false, accountNonLocked: false, authorities: [] } // Placeholder for manager
};

  getManagers() {
    this.userService.getManagers().subscribe(managers => {
      this.managers = managers;
    });
  }

  getDevelopers() {
    this.userService.getDevelopers().subscribe(developers => {
      this.developers = developers;
    });
  }

  addEval(evaluation: Evaluation): void {
    this.store.dispatch(addEval({ evaluation: { ...this.evaluation, id: undefined } }));
}
  
}
