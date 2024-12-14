import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRoulementComponent } from './plan-roulement.component';

describe('PlanRoulementComponent', () => {
  let component: PlanRoulementComponent;
  let fixture: ComponentFixture<PlanRoulementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanRoulementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanRoulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
