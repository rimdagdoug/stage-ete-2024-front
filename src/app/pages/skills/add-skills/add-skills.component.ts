import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SkillService } from 'src/app/services/skill.service';
import { loadRoles } from 'src/app/state/roles/roles.action';
import { selectAllRoles } from 'src/app/state/roles/roles.selector';
import { addSkills } from 'src/app/state/skills/skills.action';
import { SkillsState } from 'src/app/state/skills/skills.reducer';
//import { selectAllRoles } from 'src/app/state/skills/skills.selectors';


@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  skillForm: FormGroup;
  roles: any[] = []; 

  constructor(private skillService: SkillService, private store: Store<SkillsState>) { 
    this.skillForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      coefficient: new FormControl("",[Validators.required,Validators.min(0)]),
      skillType: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getRoles(); 

    this.store.select(selectAllRoles).subscribe(roles => {
      this.roles = roles;
    });
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
 
  getRoles(): void {
    this.store.dispatch(loadRoles());

  }

}
