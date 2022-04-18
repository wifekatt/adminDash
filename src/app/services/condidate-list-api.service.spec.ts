import { TestBed } from '@angular/core/testing';

import { CondidateListApiService } from './condidate-list-api.service';

describe('CondidateListApiService', () => {
  let service: CondidateListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidateListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
