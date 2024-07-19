import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EvalService } from 'src/app/services/eval.service';
import { UserService } from 'src/app/services/user.service';
import { Evaluation } from 'src/app/shared/interfaces/evaluation.interface';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-add-eval',
  templateUrl: './add-eval.component.html',
  styleUrls: ['./add-eval.component.css'],
})
export class AddEvalComponent {
  managers: User[] = [];
  developers: User[] = [];
  errorMessage = '';

  constructor(
    private evalService: EvalService,
    private userService: UserService,
    private router: Router,
  ) {
    this.getManagers();
    this.getDevelopers();
  }

  evaluation: Evaluation = {
    developerId: '0',
    managerId: '0',
    statut: '',
  };

  getManagers() {
    this.userService.getManagers().subscribe((managers) => {
      this.managers = managers;
    });
  }

  getDevelopers() {
    this.userService.getDevelopers().subscribe((developers) => {
      this.developers = developers;
    });
  }

  addEval(evaluation: Evaluation): void {
    this.evalService.createeval(evaluation).subscribe(
      (evaluation) => {
        this.evaluation = evaluation;
        this.router.navigate(['/list-eval']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 500) {
          this.errorMessage =
            "Une erreur interne s'est produite lors de l'ajout de l'évaluation.";
        } else {
          this.errorMessage =
            "Une erreur est survenue lors de l'ajout de l'évaluation.";
        }
      },
    );
  }
}
