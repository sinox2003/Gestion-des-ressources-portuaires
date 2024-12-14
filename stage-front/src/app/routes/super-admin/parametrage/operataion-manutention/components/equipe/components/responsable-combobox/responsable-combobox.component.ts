import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective
} from "@spartan-ng/ui-popover-brain";
import {HlmPopoverContentDirective} from "@spartan-ng/ui-popover-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import {HlmSelectImports, HlmSelectLabelDirective, HlmSelectOptionComponent} from '@spartan-ng/ui-select-helm';
import {MembrePersonnelService} from "../../../../../../../../service/membre-personnel.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {NgForOf} from "@angular/common";
import {data} from "autoprefixer";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-responsable-combobox',
  standalone: true,
  imports: [
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    HlmPopoverContentDirective,
    BrnPopoverContentDirective,
    HlmInputDirective,
    BrnSelectImports,
    HlmSelectImports,
    HlmInputDirective,
    FormsModule,
    HlmSelectOptionComponent,
    HlmSelectOptionComponent,
    HlmSelectLabelDirective,
    HlmSelectOptionComponent,
    HlmSkeletonComponent,
    NgForOf,
    HlmSelectOptionComponent,
    ReactiveFormsModule,

  ],
  templateUrl: './responsable-combobox.component.html',
  styleUrl: './responsable-combobox.component.css'
})
export class ResponsableComboboxComponent implements OnInit {

  membrePersonnelService=inject(MembrePersonnelService);
  currentRoute=inject(ActivatedRoute);
  personnel:any[]= [];
  filteredPersonnel: any[]= [];
  loading=false;
  terminalId: number;
  form=new FormGroup({
    responsable: new FormControl(null, [Validators.required]),
  })
  @Output() setResponsable = new EventEmitter<unknown>();


  getPersonnelByTerminalId(){
    this.loading=true;
    this.membrePersonnelService.getPersonnelByTerminalId(this.terminalId).subscribe({
      next: (data) => {
        this.personnel = data;
        this.filteredPersonnel = this.personnel.slice(0,4);
        this.loading=false;
      },
      error: (err) => {
        console.log(err);
        this.loading=false;
      }
    });
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.terminalId=params['operationId'];
    })
    this.getPersonnelByTerminalId();
    this.form.get('responsable')?.valueChanges.subscribe(value => {
      this.setResponsable.emit(value);
    })





  }


  filterPersonnel(event: any){

    this.filteredPersonnel = this.personnel.filter(personnel => personnel.matricule.toLowerCase().includes(event.target.value.toLowerCase())).slice(0,4);

    const currentSelection = this.form.get('responsable')?.value;
    if (currentSelection && !this.filteredPersonnel.includes(currentSelection)) {
      this.filteredPersonnel.push(currentSelection);
    }


  }



}
