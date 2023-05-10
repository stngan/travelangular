import { TestBed } from '@angular/core/testing';

import { SigupService } from './sigup.service';

describe('SigupService', () => {
  let service: SigupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
