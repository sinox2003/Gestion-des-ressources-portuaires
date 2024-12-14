import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesMateriellesMarineDialogComponent } from './ressources-materielles-marine-dialog.component';

describe('RessourcesMateriellesMarineDialogComponent', () => {
  let component: RessourcesMateriellesMarineDialogComponent;
  let fixture: ComponentFixture<RessourcesMateriellesMarineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcesMateriellesMarineDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcesMateriellesMarineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
