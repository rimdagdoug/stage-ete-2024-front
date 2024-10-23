import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SkillService } from 'src/app/services/skill.service';
import { loadRoles } from 'src/app/state/roles/roles.action';
import { detailSkill, updateSkill } from 'src/app/state/skills/skills.action';
import { selectAllRoles, selectSelectedSkill } from 'src/app/state/skills/skills.selectors';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skillForm: FormGroup;

  skill: any;
  roles: any[] = []; 

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { 
    this.skillForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      coefficient: new FormControl('', [Validators.required, Validators.min(1)]),
      skillType: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getSkill();
    this.getRoles(); 

    this.store.select(selectSelectedSkill).subscribe(skill => {
      if (skill) {
        this.skillForm.patchValue(skill);
      }
    });

    this.store.select(selectAllRoles).subscribe(roles => {
      this.roles = roles;
    });
  }

  

  getSkill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.store.dispatch(detailSkill({id: parseInt(id)}));
    }
  }

  getRoles(): void {
    this.store.dispatch(loadRoles());

  }

  updateSkill(): void {
    if (this.skillForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
        const skill = this.skillForm.value;
        this.store.dispatch(updateSkill({ id: parseInt(id), skill }));
      }
    } else {
      console.warn('Form is invalid:', this.skillForm.errors);
    }
  }
  

}
