import { TestBed } from '@angular/core/testing';

import { GetHistoricalService } from './get-historical.service';

describe('GetHistoricalService', () => {
  let service: GetHistoricalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHistoricalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
