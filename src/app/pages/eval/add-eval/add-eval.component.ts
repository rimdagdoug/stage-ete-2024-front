import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Evaluation } from 'src/app/shared/interfaces/evaluation.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
import { loadDeveloper } from 'src/app/state/developer/developer.action';
import { selectAllDevelopers } from 'src/app/state/developer/developer.selector';
import { addEval } from 'src/app/state/eval/eval.action';
import { loadManagers } from 'src/app/state/manager/manager.action';
import { selectAllManagers } from 'src/app/state/manager/managers.selector';

@Component({
  selector: 'app-add-eval',
  templateUrl: './add-eval.component.html',
  styleUrls: ['./add-eval.component.css']
})
export class AddEvalComponent implements OnInit{

  managers$: Observable<User[]> = this.store.select(selectAllManagers);
  developers$: Observable<User[]> = this.store.select(selectAllDevelopers);

  developer: User = { id: 0, firstname: '', lastname: '', email: '', password: '', username: '', role: '', enabled: false, accountNonExpired: false, credentialsNonExpired: false, accountNonLocked: false, authorities: [] };
  manager: User = { id: 0, firstname: '', lastname: '', email: '', password: '', username: '', role: '', enabled: false, accountNonExpired: false, credentialsNonExpired: false, accountNonLocked: false, authorities: [] } ;
  errorMessage: string = '';
  evaluation: Evaluation = { 
    developerId: '0',
    managerId: '0',
    status: '',
    finalNote: 0, 
    developer: this.developer, 
    manager: this.manager
};

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadManagers());
    this.store.dispatch(loadDeveloper());
  }

  addEval(): void {
    this.store.dispatch(addEval({ evaluation: { ...this.evaluation, id: undefined } }));
}
  
}
