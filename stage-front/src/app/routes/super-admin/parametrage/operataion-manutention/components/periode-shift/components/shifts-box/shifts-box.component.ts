import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {TimeToShiftsService} from "../../../../../../../../utils/timeToShiftsService";

@Component({
  selector: 'app-shifts-box',
  standalone: true,
  imports: [
    HlmButtonDirective
  ],
  templateUrl: './shifts-box.component.html',
  styleUrl: './shifts-box.component.css'
})
export class ShiftsBoxComponent implements  OnInit {
  @Input() periodShift!: any;
  @Output() toggleEdit = new EventEmitter<unknown>();
  shiftTimesNormal: string[] = [];
  shiftTimesRamadan: string[] = [];
  timeToShiftsService=inject(TimeToShiftsService);

  ngOnInit(): void {
    this.shiftTimesNormal = this.timeToShiftsService.generateShiftTimes(this.periodShift.startNormalPeriod);
    this.shiftTimesRamadan = this.timeToShiftsService.generateShiftTimes(this.periodShift.startRamadanPeriod);

  }



}
