import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShiftItemComponent } from './select-shift-item.component';

describe('SelectShiftItemComponent', () => {
  let component: SelectShiftItemComponent;
  let fixture: ComponentFixture<SelectShiftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectShiftItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectShiftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
