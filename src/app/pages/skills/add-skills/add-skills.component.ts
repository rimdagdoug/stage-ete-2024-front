import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SkillService } from 'src/app/services/skill.service';
import { addSkills } from 'src/app/state/skills.action';

import { AppState } from 'src/app/state/skills.selectors';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  skillForm: FormGroup;
  roles: any[] = []; 

  constructor(private skillService: SkillService, private store: Store<AppState>) { 
    this.skillForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      coefficient: new FormControl("",[Validators.required,Validators.min(0)]),
      skillType: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getRoles(); 
  }
  
  addSkill(): void {
    if (this.skillForm.valid) { // Vérifiez si le formulaire est valide
        // this.skillService.createSkill(this.skillForm.value).subscribe(result => {
        // this.skillForm.patchValue(result);
        const skill = this.skillForm.value;
        this.store.dispatch(addSkills({ skill }));

      // });
    } else {
      // Optionnel : Vous pouvez afficher un message d'erreur ou gérer les erreurs ici
      console.warn('Form is invalid:', this.skillForm.errors);
    }
  }
 
  getRoles() {
    this.skillService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

}
