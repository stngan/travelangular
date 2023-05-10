import { TestBed } from '@angular/core/testing';

import { PostOMHService } from './post-omh.service';

describe('PostOMHService', () => {
  let service: PostOMHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostOMHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
