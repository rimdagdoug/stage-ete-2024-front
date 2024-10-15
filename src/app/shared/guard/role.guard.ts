import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localRole = localStorage.getItem('role');
  if ( localRole == "RH" ) {
    return true;
  } else{
    router.navigateByUrl('/list-eval');
    return false;
  }
  
};
