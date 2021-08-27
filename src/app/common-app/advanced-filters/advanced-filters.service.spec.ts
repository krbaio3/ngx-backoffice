import { TestBed } from '@angular/core/testing';

import { AdvancedFiltersService } from './advanced-filters.service';

describe('AdvancedFiltersService', () => {
  let service: AdvancedFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
