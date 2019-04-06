import { TestBed } from '@angular/core/testing';

import { ScrapService } from './scrap.service';

describe('ScrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrapService = TestBed.get(ScrapService);
    expect(service).toBeTruthy();
  });
});
