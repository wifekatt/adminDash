import { TestBed } from '@angular/core/testing';

import { CondidateApiService } from './condidate-api.service';

describe('CondidateApiService', () => {
  let service: CondidateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
