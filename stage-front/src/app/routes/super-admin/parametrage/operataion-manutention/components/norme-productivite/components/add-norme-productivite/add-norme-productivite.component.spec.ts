import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNormeProductiviteComponent } from './add-norme-productivite.component';

describe('AddNormeProductiviteComponent', () => {
  let component: AddNormeProductiviteComponent;
  let fixture: ComponentFixture<AddNormeProductiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNormeProductiviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNormeProductiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
