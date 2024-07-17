import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'http://localhost:8080/skills';


  constructor(private http:HttpClient) { }

  getSkills(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getSkillById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createSkill(skill:any): Observable<any>{
    return this.http.post<any>(this.apiUrl,skill);
  }

  updateSkill(id: number, skill: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, skill);
  }
}
