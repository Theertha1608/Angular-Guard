import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SettingsComponent } from '../settings/settings.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent, SettingsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login = (): void => {
    const admin = { email: 'admin@example.com', password: 'admin123' };
    const user = { email: 'user@gmail.com', password: 'user123' };

    if (this.email === admin.email && this.password === admin.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', 'admin');
      this.router.navigateByUrl('/settings-component');
    } else if (this.email === user.email && this.password === user.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', 'user');
      this.router.navigateByUrl('/dashboard-component');
    } else {
      alert('Invalid email or password');
    }
  }

  logout = (): void => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
  }
}