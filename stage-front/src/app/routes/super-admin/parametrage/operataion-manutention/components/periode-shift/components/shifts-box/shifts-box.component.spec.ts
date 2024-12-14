import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsBoxComponent } from './shifts-box.component';

describe('ShiftsBoxComponent', () => {
  let component: ShiftsBoxComponent;
  let fixture: ComponentFixture<ShiftsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
