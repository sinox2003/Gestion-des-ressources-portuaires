import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesHumainesDialogComponent } from './ressources-humaines-dialog.component';

describe('RessourcesHumainesDialogComponent', () => {
  let component: RessourcesHumainesDialogComponent;
  let fixture: ComponentFixture<RessourcesHumainesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourcesHumainesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourcesHumainesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
