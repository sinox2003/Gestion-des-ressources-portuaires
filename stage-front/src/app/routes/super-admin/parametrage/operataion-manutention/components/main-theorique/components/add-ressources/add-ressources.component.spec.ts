import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRessourcesComponent } from './add-ressources.component';

describe('AddRessourcesComponent', () => {
  let component: AddRessourcesComponent;
  let fixture: ComponentFixture<AddRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRessourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
