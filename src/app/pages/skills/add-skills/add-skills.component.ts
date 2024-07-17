import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  constructor(private skillService: SkillService, private router: Router) { }
  skill: any = {};
  
  addskill(skill:any):void{
     this.skillService.createSkill(skill).subscribe(result=>this.skill=result)
     this.router.navigate(['/list-skills']);
    }
 

}
