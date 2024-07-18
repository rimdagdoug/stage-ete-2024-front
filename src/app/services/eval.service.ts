import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvalService {
  private apiUrl='http://localhost:8080/evaluations';


  constructor(private http:HttpClient) { }

  geteval(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  createeval(evalu:any): Observable<any>{
    evalu.statut = "AWAITING_DEVELOPER_INPUT";
    return this.http.post<any>(this.apiUrl,evalu);
  }
  updateSkill(id: number, evalu: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, evalu);
  }
  getevalById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
