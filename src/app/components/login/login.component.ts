import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) { 
  }

  login() {
    if (this.email.length > 5 && this.password.length > 5) {
      this.router.navigate(['/users']);
    } else {
      alert('Invalid credentials');
    }
  }



}
