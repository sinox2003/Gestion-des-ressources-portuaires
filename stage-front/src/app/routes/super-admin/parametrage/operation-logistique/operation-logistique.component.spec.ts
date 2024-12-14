import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationLogistiqueComponent } from './operation-logistique.component';

describe('OperationLogistiqueComponent', () => {
  let component: OperationLogistiqueComponent;
  let fixture: ComponentFixture<OperationLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationLogistiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
