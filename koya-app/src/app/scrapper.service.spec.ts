import { TestBed } from '@angular/core/testing';

import { ScrapperService } from './scrapper.service';

describe('ScrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrapperService = TestBed.get(ScrapperService);
    expect(service).toBeTruthy();
  });
});
