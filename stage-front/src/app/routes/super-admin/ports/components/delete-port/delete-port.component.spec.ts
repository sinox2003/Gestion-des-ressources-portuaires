import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePortComponent } from './delete-port.component';

describe('DeletePortComponent', () => {
  let component: DeletePortComponent;
  let fixture: ComponentFixture<DeletePortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
