import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelEquipeDialogComponent } from './personnel-equipe-dialog.component';

describe('PersonnelEquipeDialogComponent', () => {
  let component: PersonnelEquipeDialogComponent;
  let fixture: ComponentFixture<PersonnelEquipeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelEquipeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelEquipeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
