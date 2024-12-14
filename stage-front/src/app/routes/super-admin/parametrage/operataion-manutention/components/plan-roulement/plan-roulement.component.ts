import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ShiftsBoxComponent} from "../periode-shift/components/shifts-box/shifts-box.component";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {BrnRadioComponent, BrnRadioGroupComponent} from "@spartan-ng/ui-radiogroup-brain";
import {HlmRadioDirective, HlmRadioGroupDirective, HlmRadioIndicatorComponent} from "@spartan-ng/ui-radiogroup-helm";
import {HlmTableComponent, HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";

import {SelectShiftItemComponent} from "./components/select-shift-item/select-shift-item.component";
import {OperationManutentionService} from "../../../../../../service/operation-manutention.service";



@Component({
  selector: 'app-plan-roulement',
  standalone: true,
  imports: [
    HlmRadioDirective,
    HlmRadioGroupDirective,
    HlmRadioIndicatorComponent,
    BrnRadioComponent, BrnRadioGroupComponent,
    NgIf,

    ReactiveFormsModule,
    ShiftsBoxComponent,
    HlmSpinnerComponent,
    HlmButtonDirective,
    HlmSpinnerComponent,
    HlmLabelDirective,
    HlmInputDirective, HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmScrollAreaComponent, SelectShiftItemComponent
  ],
  templateUrl: './plan-roulement.component.html',
  styleUrl: './plan-roulement.component.css'
})
export class PlanRoulementComponent implements OnInit{
  @Output() refresh = new EventEmitter<unknown>();
  @Input() operation!: any;
  edit= false;
  loading= false;
  form=new FormGroup({
    plan:new FormControl('',Validators.required),
    startDate:new FormControl('',Validators.required),
    endDate:new FormControl('',Validators.required)
  })
  @Input() operationService!: OperationManutentionService;



  toggleEditBox() {
    this.edit=!this.edit;
  }


  save() {
    console.log(this.form.valid)
    if(this.form.valid) {
      this.operation.planRoulement = this.form.value
      this.loading = true;
      this.operationService.updateOperation(this.operation).subscribe({
        next:()=>{
          this.loading = false;
          this.refresh.emit();
          this.edit=false;
        },
        error:()=>{
          this.loading = false;
          this.edit=false;
        }
      })
    }

  }

  ngOnInit(): void {
    if(this.operation.planRoulement){
      this.form.patchValue(this.operation.planRoulement)
    }

  }
}
