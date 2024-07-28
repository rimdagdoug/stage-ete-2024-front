import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.css']
})
export class ListSkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe(skills => this.skills = skills);
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
