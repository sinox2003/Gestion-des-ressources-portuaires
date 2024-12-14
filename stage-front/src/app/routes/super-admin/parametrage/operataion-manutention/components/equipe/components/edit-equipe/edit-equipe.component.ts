import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideEdit} from "@ng-icons/lucide";
import {
  HlmSheetComponent,
  HlmSheetContentComponent, HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent, HlmSheetTitleDirective
} from "@spartan-ng/ui-sheet-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {BrnSheetContentDirective, BrnSheetTriggerDirective} from "@spartan-ng/ui-sheet-brain";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {ResponsableComboboxComponent} from "../responsable-combobox/responsable-combobox.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EquipeService} from "../../../../../../../../service/equipe.service";
import {NgIf} from "@angular/common";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";

@Component({
  selector: 'app-edit-equipe',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmLabelDirective,
    ResponsableComboboxComponent,
    ReactiveFormsModule,
    NgIf,
    HlmSpinnerComponent,
    HlmSpinnerComponent,
  ],
  providers: [provideIcons({ lucideEdit })],

  templateUrl: './edit-equipe.component.html',
  styleUrl: './edit-equipe.component.css'
})
export class EditEquipeComponent implements OnInit {
  @Input() equipe!: any;
  @Output() refresh = new EventEmitter<unknown>();
  equipeService=inject(EquipeService);
  loading = false;
  responsable:any;
  form=new FormGroup({
    nom:new FormControl('',Validators.required)
  })

  setResponsable($event: unknown) {
    console.log($event)
    this.responsable = $event;
  }

  ngOnInit(): void {
    this.form.patchValue(this.equipe);
    this.responsable=this.equipe.responsable;
  }

  save(ctx:any): void {
    if(this.form.valid) {
      if(this.equipe.responsable.matricule === this.responsable.matricule && this.form.value.nom===this.equipe.nom) {
        return ;
      }
      this.loading = true;
      this.equipe.responsable=this.responsable;
      this.equipe.nom=this.form.value.nom;
      this.equipeService.updateEquipe(this.equipe).subscribe({
        next: () => {
          this.loading = false;
          ctx.close();
          this.refresh.emit();
        },
        error: (err) => {
          this.loading = false;
          console.log(err)
        }
      })
    }
  }

}
