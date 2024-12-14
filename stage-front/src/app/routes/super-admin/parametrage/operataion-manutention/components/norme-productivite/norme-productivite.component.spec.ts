import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormeProductiviteComponent } from './norme-productivite.component';

describe('NormeProductiviteComponent', () => {
  let component: NormeProductiviteComponent;
  let fixture: ComponentFixture<NormeProductiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormeProductiviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormeProductiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
