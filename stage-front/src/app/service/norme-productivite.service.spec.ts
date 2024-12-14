import { TestBed } from '@angular/core/testing';

import { NormeProductiviteService } from './norme-productivite.service';

describe('NormeProductiviteService', () => {
  let service: NormeProductiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormeProductiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
