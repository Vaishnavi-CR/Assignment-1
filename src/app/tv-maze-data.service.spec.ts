import { TestBed } from '@angular/core/testing';

import { TvMazeDataService } from './tv-maze-data.service';

describe('TvMazeDataService', () => {
  let service: TvMazeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvMazeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
