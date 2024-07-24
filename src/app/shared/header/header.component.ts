import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  firstname: string | null;
  lastname: string | null;
  constructor(private router: Router) {
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    this.router.navigate(['/login']);
  }
}
