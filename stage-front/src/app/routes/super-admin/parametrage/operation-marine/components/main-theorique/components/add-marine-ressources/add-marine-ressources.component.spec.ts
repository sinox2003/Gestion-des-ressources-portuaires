import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarineRessourcesComponent } from './add-marine-ressources.component';

describe('AddMarineRessourcesComponent', () => {
  let component: AddMarineRessourcesComponent;
  let fixture: ComponentFixture<AddMarineRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMarineRessourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarineRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
