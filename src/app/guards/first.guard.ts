import { CanActivateFn } from '@angular/router';

export const firstGuard: CanActivateFn = (route, state) => {

  if (route?.url?.[0]?.path.includes('second-')) {
    return false;
  } else {
    return true;
  }
};
