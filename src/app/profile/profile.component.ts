import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterLinkActive, FormsModule, ReactiveFormsModule, BrowserModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit {
  userEmail: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('user') ?? undefined;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    this.router.navigateByUrl('/login');
  }
}
