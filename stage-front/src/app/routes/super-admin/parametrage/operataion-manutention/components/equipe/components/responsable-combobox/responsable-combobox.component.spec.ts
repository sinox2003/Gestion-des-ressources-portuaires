import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableComboboxComponent } from './responsable-combobox.component';

describe('ResponsableComboboxComponent', () => {
  let component: ResponsableComboboxComponent;
  let fixture: ComponentFixture<ResponsableComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableComboboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
