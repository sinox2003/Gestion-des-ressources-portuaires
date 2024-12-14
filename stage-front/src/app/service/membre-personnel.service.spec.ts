import { TestBed } from '@angular/core/testing';

import { MembrePersonnelService } from './membre-personnel.service';

describe('MembrePersonnelService', () => {
  let service: MembrePersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembrePersonnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
