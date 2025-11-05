import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.name && this.email && this.password) {
      alert('Registration successful! Please login.');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill all fields!');
    }
  }
}
