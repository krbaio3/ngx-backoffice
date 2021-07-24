import { TestBed } from '@angular/core/testing';

import { AdHocReportsService } from './ad-hoc-reports.service';

describe('AdHocReportsService', () => {
  let service: AdHocReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdHocReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
