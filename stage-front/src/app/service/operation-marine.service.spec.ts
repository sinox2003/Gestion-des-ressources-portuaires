import { TestBed } from '@angular/core/testing';

import { OperationMarineService } from './operation-marine.service';

describe('OperationMarineService', () => {
  let service: OperationMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
