import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {

    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.auth.register(user).subscribe(() => {
      alert('Registered successfully');
      this.router.navigate(['/login']); // 🔥 مهم
    });

  }
}