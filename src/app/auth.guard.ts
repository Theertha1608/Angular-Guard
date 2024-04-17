import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  if(localStorage.getItem('userType') === 'user@gmail.com'){

    return true;
  } else{
    router.navigateByUrl('/login-component');
    return false;
  }

};