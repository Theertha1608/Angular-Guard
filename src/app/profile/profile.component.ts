import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterLinkActive, FormsModule, ReactiveFormsModule, BrowserModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  login(): void {
    // Here you can add your login logic
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    // For demonstration purposes, let's assume login is successful
    alert('Login successful!');
  }

  logout(): void {
    // Here you can add your logout logic
    this.username = '';
    this.password = '';
    alert('Logged out!');
  }
}

