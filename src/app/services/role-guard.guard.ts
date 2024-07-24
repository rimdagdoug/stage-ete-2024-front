import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localRole = localStorage.getItem('role');
  if(localRole== "RH") {
    return true;
  }else{
    router.navigateByUrl('/dashboard');
    return false;
  }
  
};
