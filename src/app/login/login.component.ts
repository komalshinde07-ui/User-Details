import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
//  email = '';
//   password = '';

  constructor(private router: Router) {}


      onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Email or Password!');
    }
  }
  

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
