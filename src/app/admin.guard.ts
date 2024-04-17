import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  if(localStorage.getItem('userType') === 'admin@gmail.com'){

    return true;
  } else{
    router.navigateByUrl('/login-component');
    return false;
  }

};

