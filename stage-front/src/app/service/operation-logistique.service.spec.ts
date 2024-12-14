import { TestBed } from '@angular/core/testing';

import { OperationLogistiqueService } from './operation-logistique.service';

describe('OperationLogistiqueService', () => {
  let service: OperationLogistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationLogistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
