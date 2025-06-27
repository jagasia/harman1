// auth.guard.ts
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const doc = inject(DOCUMENT);
  const router = inject(Router);

  const win = doc.defaultView as Window | null;

  if (win && win.localStorage) {
    const isLoggedIn = !!win.localStorage.getItem('token');
    if (!isLoggedIn) {
      router.navigate(['/login']);
    }
    return isLoggedIn;
  }

  // fallback if not running in browser
  return false;
};
