import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl<string>(
      localStorage.getItem('rememberedEmail') || '',
      [Validators.required, Validators.email]
    ),
    password: new FormControl<string>('',
      [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl<boolean>(
      localStorage.getItem('rememberedEmail') ? true : false
    )
  });

  get emailControl() {
    return this.form.get('email');
  }

  get passwordControl() {
    return this.form.get('password');
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      const email = this.emailControl?.value as string; 
      const password = this.passwordControl?.value;
      const rememberMe = this.form.get('rememberMe')?.value;

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail'); 
      }

      if (email && password && email.length > 5 && password.length > 5) {
        this.router.navigate(['/users']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
