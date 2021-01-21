import { TestBed } from '@angular/core/testing';

import { ChuckNorrisService } from './chuck-norris.service';

describe('ChuckNorrisService', () => {
  let service: ChuckNorrisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckNorrisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
