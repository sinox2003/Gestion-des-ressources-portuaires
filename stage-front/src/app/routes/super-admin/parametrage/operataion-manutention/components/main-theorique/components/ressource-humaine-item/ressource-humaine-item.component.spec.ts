import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceHumaineItemComponent } from './ressource-humaine-item.component';

describe('RessourceHumaineItemComponent', () => {
  let component: RessourceHumaineItemComponent;
  let fixture: ComponentFixture<RessourceHumaineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourceHumaineItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceHumaineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
