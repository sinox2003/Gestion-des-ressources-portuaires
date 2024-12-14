import { TestBed } from '@angular/core/testing';

import { OperationManutentionService } from './operation-manutention.service';

describe('OperationManutentionService', () => {
  let service: OperationManutentionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationManutentionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
