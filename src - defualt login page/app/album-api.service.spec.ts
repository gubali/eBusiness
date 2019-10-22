import { TestBed } from '@angular/core/testing';

import { AlbumApiService } from './album-api.service';

describe('AlbumApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumApiService = TestBed.get(AlbumApiService);
    expect(service).toBeTruthy();
  });
});
