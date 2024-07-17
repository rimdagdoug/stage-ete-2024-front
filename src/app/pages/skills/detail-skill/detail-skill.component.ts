import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-detail-skill',
  templateUrl: './detail-skill.component.html',
  styleUrls: ['./detail-skill.component.css']
})
export class DetailSkillComponent implements OnInit {
  skill: any;

  constructor(private skillService: SkillService,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id=params['id'];
        this.detailskil(id);
      })
  }

  detailskil(id:number ): void{
    this.skillService.getSkillById(id).subscribe(
      skill=>this.skill=skill
    );
  }

}
