import { TestBed } from '@angular/core/testing';

import { CustomPreloadingWithDelayService } from './custom-preloading-with-delay.service';

describe('CustomPreloadingWithDelayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadingWithDelayService = TestBed.get(CustomPreloadingWithDelayService);
    expect(service).toBeTruthy();
  });
});
