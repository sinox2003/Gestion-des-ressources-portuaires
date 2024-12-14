import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTheoriqueComponent } from './main-theorique.component';

describe('MainTheoriqueComponent', () => {
  let component: MainTheoriqueComponent;
  let fixture: ComponentFixture<MainTheoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTheoriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTheoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
