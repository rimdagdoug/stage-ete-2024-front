import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EvalService {
  private apiUrl='http://localhost:8080/evaluations';
  private apiurlskill='http://localhost:8080/result';
  private apiurlnote='http://localhost:8080/result/noteInput';
  private apiurlFinalScore = 'http://localhost:8080/result/updateFinalScore';


  constructor(private http:HttpClient) { }

  geteval(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  createeval(evalu:any): Observable<any>{
    const clonedEvalu = { ...evalu };
    clonedEvalu.status = "AWAITING_DEVELOPER_INPUT";
    return this.http.post<any>(this.apiUrl,clonedEvalu);
  }
  updateSkill(id: number, evalu: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, evalu);
  }
   getevalById(id: number): Observable<any>{
      return this.http.get<any>(`${this.apiurlskill}/${id}`);
   }

  getResultatEvaluationByIdEval(ideval: number): Observable<any>{
    return this.http.get<any>(`${this.apiurlskill}/${ideval}`);
  }

  noteInput(evalu:any): Observable<any>{
    return this.http.put<any>(this.apiurlnote,evalu);
  }

  getFinalScore(evaluationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiurlFinalScore}?evaluationId=${evaluationId}`);
  }

 
}
