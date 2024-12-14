import { TestBed } from '@angular/core/testing';

import { MainTheoriqueManutentionService } from './main-theorique-manutention.service';

describe('MainTheoriqueManutentionService', () => {
  let service: MainTheoriqueManutentionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTheoriqueManutentionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
