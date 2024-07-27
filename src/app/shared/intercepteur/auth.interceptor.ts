import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');


    if (request.url.includes('api/auth')) { // Vérifiez si l'URL ne contient pas l'API d'authentification
      return next.handle(request);
    }


    const newCloneRequest = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(newCloneRequest);
  }
}
