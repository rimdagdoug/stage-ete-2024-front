import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {

  skillForm: FormGroup;
  roles: any[] = []; 

  constructor(private skillService: SkillService, private router: Router) { 
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
      this.skillService.createSkill(this.skillForm.value).subscribe(result => {
        this.skillForm.patchValue(result);
        this.router.navigate(['/list-skills']); // Déplacez la navigation ici
      });
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
