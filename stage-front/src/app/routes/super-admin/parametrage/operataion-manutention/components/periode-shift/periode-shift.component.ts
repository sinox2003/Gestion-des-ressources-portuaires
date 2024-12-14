import {Component, EventEmitter, inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";


import {
  BrnCollapsibleComponent,
  BrnCollapsibleContentComponent,
  BrnCollapsibleTriggerDirective,
} from '@spartan-ng/ui-collapsible-brain';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideChevronDown} from "@ng-icons/lucide";
import {NgClass, NgIf} from "@angular/common";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {OperationManutentionService} from "../../../../../../service/operation-manutention.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {ShiftsBoxComponent} from "./components/shifts-box/shifts-box.component";
import {ramadanDatesValidator} from "../../../../../../utils/form-validators.service";



@Component({
  selector: 'app-periode-shift',
  standalone: true,
  imports: [
    HlmInputDirective,
    FormsModule,
    BrnCollapsibleComponent,
    BrnCollapsibleContentComponent,
    BrnCollapsibleTriggerDirective,
    HlmIconComponent,
    HlmIconComponent,
    NgClass,
    HlmButtonDirective,
    ReactiveFormsModule,
    NgIf,
    HlmSpinnerComponent,
    ShiftsBoxComponent,
  ],
  providers:[provideIcons({lucideChevronDown})],
  templateUrl: './periode-shift.component.html',
  styleUrl: './periode-shift.component.css'
})
export class PeriodeShiftComponent implements OnInit {
  @Output() refresh = new EventEmitter<unknown>();
  @Input() operation!: any;
  showMore=false;
  loading = false;
  edit = false;
  fb=inject(FormBuilder);
  form = this.fb.group({
    startNormalPeriod: [ null, Validators.required],
    startRamadanPeriod: [ null, Validators.required],
    ramadanStartDate: [ null],
    ramadanEndDate: [ null],
  }, {validators:[ramadanDatesValidator]});
  @Input() operationService!: OperationManutentionService;


  toggleMore(){
    this.showMore=!this.showMore;
  }

  update(): void {
    console.log(this.form.errors)
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    if(this.operation.periodShift) {
      this.operation.periodShift = {id:this.operation.periodShift.id,...this.form.value  };
    }else {
      this.operation.periodShift = this.form.value ;
    }


    this.operationService.updateOperation(this.operation).subscribe({
      next: () => {
        this.loading = false;
        this.refresh.emit();
        this.edit=false;
      },
      error: () => {
        this.loading = false;
        this.edit=false;

      },
    });
  }

  toggleEditBox(): void {
    this.edit =!this.edit;
  }

  ngOnInit(): void {

    this.form.patchValue(this.operation?.periodShift);

  }



}
