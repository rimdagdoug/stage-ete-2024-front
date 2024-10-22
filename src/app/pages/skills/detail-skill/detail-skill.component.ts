import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { Skills } from 'src/app/shared/interfaces/skills.interface';
import { detailSkill } from 'src/app/state/skills.action';
import { selectAll, selectSelectedSkill } from 'src/app/state/skills.selectors'; // Ensure this is imported

@Component({
  selector: 'app-detail-skill',
  templateUrl: './detail-skill.component.html',
  styleUrls: ['./detail-skill.component.css']
})
export class DetailSkillComponent implements OnInit {
  skillForm: FormGroup;
  selectedSkill$: Observable<Skills | null> = this.store.select(selectSelectedSkill);;
  dataSource$: Observable<Skills[]> = this.store.select(selectAll);
 
  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.skillForm = new FormGroup({
      name: new FormControl({ value: '', disabled: true }), 
      description: new FormControl({ value: '', disabled: true }), 
      coefficient: new FormControl({ value: '', disabled: true }),
      skillType: new FormControl({ value: '', disabled: true })
    });



  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        const id = +params['id'];
        this.store.dispatch(detailSkill({ id })); 
        return this.selectedSkill$; 
      }),
      tap(skill => {
        if (skill) {
          console.log('Skill après transformation:', skill);
           this.skillForm.patchValue(skill); 
        }
      })
    ).subscribe();
  }

}