import { ResolveFn } from '@angular/router';

export const firstResolver: ResolveFn<boolean | void> = (route, state) => {

  console.log(route)
  if (route?.url?.[0]?.path.includes('second')) {
    /* window.location.href="http://localhost:4200/404"; */
    return;
  } else {
    return true;
  }

};

