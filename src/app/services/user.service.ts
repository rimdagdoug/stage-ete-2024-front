import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http:HttpClient) { }

  getManagers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/managers`);
  }

  getDevelopers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/developers`);
  }
}
