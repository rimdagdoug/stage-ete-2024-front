import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-detail-skill',
  templateUrl: './detail-skill.component.html',
  styleUrls: ['./detail-skill.component.css']
})
export class DetailSkillComponent implements OnInit {
  skillForm: FormGroup;

  constructor(private skillService: SkillService,private route:ActivatedRoute) {
    this.skillForm = new FormGroup({
      name: new FormControl({ value: '', disabled: true }), 
      description: new FormControl({ value: '', disabled: true }), 
      coefficient: new FormControl({ value: '', disabled: true }) 
    });
   }
  
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.detailskil(id);
      })
  }

  detailskil(id : number ): void{
    this.skillService.getSkillById(id).subscribe(
      skill => {
        this.skillForm.patchValue(skill); 
      }
    );
  }

}
