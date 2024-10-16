import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SkillService } from 'src/app/services/skill.service';
import { AppState, selectAll, selectFeature } from 'src/app/state/skills.selectors';
import * as Actions from '../../../state/skills.action'
import { Skills } from 'src/app/shared/interfaces/skills.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.css']
})
export class ListSkillsComponent implements OnInit {
  skills: Skills[] = []; 
  dataSource$: Observable<Skills[]> = this.store.select(selectFeature);
  constructor(private router: Router, private store: Store<AppState>) {
    this.store.dispatch(Actions.loadSkills());
   }

  ngOnInit(): void {
    this.dataSource$
    .subscribe(
      (result: any) => {
        this.skills = Array.isArray(result.skills) ? result.skills : []; 
      }
    );
  }

  editSkill(id: number): void {
    this.router.navigate(['/edit-skills', id]);
  }

  viewSkill(id: number): void {
    this.router.navigate(['/detail-skill', id]);
  }

  addSkill(): void {
    this.router.navigate(['/add-skills']);
  }
}
