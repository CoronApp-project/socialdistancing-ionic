import { TestBed } from '@angular/core/testing';

import { SocialDistanceService } from './social-distance.service';

describe('SocialDistanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialDistanceService = TestBed.get(SocialDistanceService);
    expect(service).toBeTruthy();
  });
});
