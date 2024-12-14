import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperataionManutentionComponent } from './operataion-manutention.component';

describe('OperataionManutentionComponent', () => {
  let component: OperataionManutentionComponent;
  let fixture: ComponentFixture<OperataionManutentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperataionManutentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperataionManutentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
