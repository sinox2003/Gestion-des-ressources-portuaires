import { TestBed } from '@angular/core/testing';

import { MainTheoriqueMarineService } from './main-theorique-marine.service';

describe('MainTheoriqueMarineService', () => {
  let service: MainTheoriqueMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTheoriqueMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
