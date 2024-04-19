import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const userType = localStorage.getItem('userType');

    if (userType === 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/login-component');
      return false;
    }
  }
}

