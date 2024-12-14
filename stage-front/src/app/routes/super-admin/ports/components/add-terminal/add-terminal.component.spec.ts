import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerminalComponent } from './add-terminal.component';

describe('AddTerminalComponent', () => {
  let component: AddTerminalComponent;
  let fixture: ComponentFixture<AddTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTerminalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
