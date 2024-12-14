import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNormeProductiviteButtonComponent } from './delete-norme-productivite-button.component';

describe('DeleteNormeProductiviteButtonComponent', () => {
  let component: DeleteNormeProductiviteButtonComponent;
  let fixture: ComponentFixture<DeleteNormeProductiviteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteNormeProductiviteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNormeProductiviteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
