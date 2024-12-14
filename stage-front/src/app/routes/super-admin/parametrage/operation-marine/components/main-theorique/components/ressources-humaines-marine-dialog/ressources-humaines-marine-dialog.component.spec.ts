import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesHumainesMarineDialogComponent } from './ressources-humaines-marine-dialog.component';

describe('RessourcesHumainesMarineDialogComponent', () => {
  let component: RessourcesHumainesMarineDialogComponent;
  let fixture: ComponentFixture<RessourcesHumainesMarineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcesHumainesMarineDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcesHumainesMarineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
