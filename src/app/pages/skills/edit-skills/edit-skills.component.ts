import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skill: any;

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.skillService.getSkillById(parseInt(id)).subscribe(
        skill => this.skill = skill
      );
    }
  }

  updateSkill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.skillService.updateSkill(parseInt(id), this.skill).subscribe(
        updatedSkill => {
        
          this.router.navigate(['/list-skills']);
        },
        error => {
          console.error('Erreur lors de la mise à jour de la compétence :', error);
          
        }
      );
    }
  }
  

}
