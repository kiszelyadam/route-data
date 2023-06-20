import { CanActivateFn } from '@angular/router';

export const deactivateGuard: CanActivateFn = (route, state) => {
  console.log(route);
  return false;
};
