import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelSelectComponent } from './personnel-select.component';

describe('PersonnelSelectComponent', () => {
  let component: PersonnelSelectComponent;
  let fixture: ComponentFixture<PersonnelSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
