import { TestBed, inject } from '@angular/core/testing';

import { TimesVisitedService } from './times-visited.service';

describe('TimesVisitedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimesVisitedService]
    });
  });

  it('should be created', inject([TimesVisitedService], (service: TimesVisitedService) => {
    expect(service).toBeTruthy();
  }));
});
