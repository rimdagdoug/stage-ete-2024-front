import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup;

 
  constructor(private http: HttpClient, private router: Router){
    this.userForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(6)])
    })
  }

  onLogin(){
    const loginData = this.userForm.value;
    this.http.post('http://localhost:8080/api/auth/authenticate',loginData).subscribe((data:any)=>{
      if(data){

            localStorage.setItem('token',data.token);
            this.router.navigateByUrl('/dashboard');
        }else{
            console.warn('token non valide')
        }     
    })
  }
}
