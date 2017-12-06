import { TestBed, inject } from '@angular/core/testing';

import { SpaceInvaderService } from '../shared/space-invaders.service';

describe('SpaceInvaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceInvaderService]
    });
  });

  it('should be created', inject([SpaceInvaderService], (service: SpaceInvaderService) => {
    expect(service).toBeTruthy();
  }));
});
