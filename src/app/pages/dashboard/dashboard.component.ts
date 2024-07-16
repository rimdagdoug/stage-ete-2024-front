import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  skills: any[]=[];

  
  constructor(private http:HttpClient){
    this.loadSkills();
  }

  loadSkills(){
    this.http.get('http://localhost:8080/skills').subscribe((res:any)=>{
      this.skills=res;
    })
  }
}
