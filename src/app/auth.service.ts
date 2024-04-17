import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }


  login(username: string, password: string): boolean {
    if ((username === 'admin@example.com' && password === 'admin123') ||
        (username === 'user@example.com' && password === 'user123')) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', username === 'admin@example.com' ? 'admin' : 'user');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserType(): string | null {
    return localStorage.getItem('userType');
  }
}