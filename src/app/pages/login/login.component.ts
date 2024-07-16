import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any = {
      email: '',
      password: ''
    
  };
  constructor(private http: HttpClient, private router: Router){}

  onLogin(){

    this.http.post('http://localhost:8080/api/auth/authenticate',this.loginForm).subscribe((data:any)=>{
      if(data){

            localStorage.setItem('token',data.token);
            this.router.navigateByUrl('/dashboard');
        }else{
            console.warn('token non valide')
        }     
    })
  }
}
