import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterLinkActive],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {


    constructor(private router: Router) {}
  
    logout(): void {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userType');
      this.router.navigateByUrl('/login');
    }
  }

