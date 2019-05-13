import { TestBed } from '@angular/core/testing';

import { MoniteursService } from './moniteurs.service';

describe('MoniteursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoniteursService = TestBed.get(MoniteursService);
    expect(service).toBeTruthy();
  });
});
