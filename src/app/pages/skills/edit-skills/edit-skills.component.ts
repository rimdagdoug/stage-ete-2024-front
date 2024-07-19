import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skillForm: FormGroup;

  skill: any;

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.skillForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      coefficient: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.skillService.getSkillById(parseInt(id)).subscribe(
        skill => {
          this.skillForm.patchValue(skill);
        }
      );
    }
  }

  updateSkill(): void {
    if (this.skillForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
        this.skillService.updateSkill(parseInt(id), this.skillForm.value).subscribe(
          updatedSkill => {
            this.router.navigate(['/list-skills']);
          },
          error => {
            console.error('Error updating skill:', error);
          }
        );
      }
    } else {
      console.warn('Form is invalid:', this.skillForm.errors);
    }
  }
  

}
