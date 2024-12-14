import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainTheoriqueComponent } from './add-main-theorique.component';

describe('AddMainTheoriqueComponent', () => {
  let component: AddMainTheoriqueComponent;
  let fixture: ComponentFixture<AddMainTheoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMainTheoriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMainTheoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
