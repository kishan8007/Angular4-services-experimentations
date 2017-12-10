import { TestBed, inject } from '@angular/core/testing';

import { SpaceObservablesService } from './space-observables.service';

describe('SpaceObservablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceObservablesService]
    });
  });

  it('should be created', inject([SpaceObservablesService], (service: SpaceObservablesService) => {
    expect(service).toBeTruthy();
  }));
});
