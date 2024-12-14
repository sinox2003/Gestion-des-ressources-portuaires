import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMarineComponent } from './operation-marine.component';

describe('OperationMarineComponent', () => {
  let component: OperationMarineComponent;
  let fixture: ComponentFixture<OperationMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationMarineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
