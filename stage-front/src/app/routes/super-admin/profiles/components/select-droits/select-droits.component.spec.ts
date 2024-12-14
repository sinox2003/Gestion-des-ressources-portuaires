import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDroitsComponent } from './select-droits.component';

describe('SelectDroitsComponent', () => {
  let component: SelectDroitsComponent;
  let fixture: ComponentFixture<SelectDroitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDroitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
