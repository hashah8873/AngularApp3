import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/book-api';

  constructor(private http: HttpClient) {}

  // ✅ REGISTER
  register(user: any) {
    return this.http.post(`${this.apiUrl}/register.php`, user);
  }

  // ✅ LOGIN
  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login.php`, {
      email: email,
      password: password
    });
  }
}