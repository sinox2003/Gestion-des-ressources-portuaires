import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalItemComponent } from './terminal-item.component';

describe('TerminalItemComponent', () => {
  let component: TerminalItemComponent;
  let fixture: ComponentFixture<TerminalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
