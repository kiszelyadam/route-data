import { CanActivateFn } from '@angular/router';

export const firstChildGuard: CanActivateFn = (route, state) => {
  console.log(route);
  return true;
};
