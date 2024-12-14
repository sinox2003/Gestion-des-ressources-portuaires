import {Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {ResponsableComboboxComponent} from "../responsable-combobox/responsable-combobox.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {PersonnelSelectComponent} from "../personnel-select/personnel-select.component";
import {ActivatedRoute} from "@angular/router";
import {OperationManutentionService} from "../../../../../../../../service/operation-manutention.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-equipe',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmInputDirective,
    HlmLabelDirective,
    ResponsableComboboxComponent,
    ReactiveFormsModule,
    HlmButtonDirective,
    PersonnelSelectComponent,
    HlmButtonDirective,
    HlmSpinnerComponent,
    NgIf
  ],
  templateUrl: './add-equipe.component.html',
  styleUrl: './add-equipe.component.css'
})
export class AddEquipeComponent {
  @Input() operation!: any;
  @Output() refresh = new EventEmitter<unknown>();
  manutentionService = inject(OperationManutentionService);
  isFormOpen= false;
  loading=false;
  fb=inject(FormBuilder);
  currentRoute=inject(ActivatedRoute);


  form = this.fb.group({
    id:['',Validators.required],
    nom: ['',Validators.required],
    responsable: [null,Validators.required],
    personnel: [[],Validators.required]

  })


  toggleForm(){

    this.isFormOpen =!this.isFormOpen;
  }

  update() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.operation.equipeList.push(this.form.value);
    console.log(this.operation)
    this.manutentionService.updateOperation(this.operation).subscribe({
      next: () => {
        this.loading = false;
        this.toggleForm();
        this.refresh.emit();
        this.form.reset();
      },
      error: () => {
        this.loading = false;
        console.error('Error updating manutention');
      }
    })

  }

  setResponsable($event: any) {
    this.form.patchValue({responsable: $event})
  }

  setPersonnel($event: any) {
    this.form.patchValue({personnel: $event})
  }
}
