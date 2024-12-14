import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesMateriellesDialogComponent } from './ressources-materielles-dialog.component';

describe('RessourcesMateriellesDialogComponent', () => {
  let component: RessourcesMateriellesDialogComponent;
  let fixture: ComponentFixture<RessourcesMateriellesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcesMateriellesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcesMateriellesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
