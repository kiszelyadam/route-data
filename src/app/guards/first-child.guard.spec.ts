import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { firstChildGuard } from './first-child.guard';

describe('firstChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => firstChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
