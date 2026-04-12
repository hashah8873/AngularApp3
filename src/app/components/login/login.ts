import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.email, this.password).subscribe((res: any) => {

      console.log("LOGIN RESPONSE:", res); // 🔥 مهم

      if (res.status === 'success') {
        alert('Login successful');
        this.router.navigate(['/list']);
      } else {
        alert('Invalid credentials');
      }

    });
  }
}