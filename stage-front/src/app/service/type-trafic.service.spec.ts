import { TestBed } from '@angular/core/testing';

import { TypeTraficService } from './type-trafic.service';

describe('TypeTraficService', () => {
  let service: TypeTraficService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTraficService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
