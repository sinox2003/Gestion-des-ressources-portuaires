import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarineMainTheoriqueComponent } from './add-marine-main-theorique.component';

describe('AddMarineMainTheoriqueComponent', () => {
  let component: AddMarineMainTheoriqueComponent;
  let fixture: ComponentFixture<AddMarineMainTheoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMarineMainTheoriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarineMainTheoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
