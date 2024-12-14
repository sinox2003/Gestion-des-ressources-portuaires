import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceHumaineMarineItemComponent } from './ressource-humaine-marine-item.component';

describe('RessourceHumaineMarineItemComponent', () => {
  let component: RessourceHumaineMarineItemComponent;
  let fixture: ComponentFixture<RessourceHumaineMarineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourceHumaineMarineItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceHumaineMarineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
