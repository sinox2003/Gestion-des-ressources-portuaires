import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import {HlmSelectImports} from "@spartan-ng/ui-select-helm";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {
  RessourceHumaineMarineItemComponent
} from "../ressource-humaine-marine-item/ressource-humaine-marine-item.component";

@Component({
  selector: 'app-add-marine-ressources',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BrnSelectImports,
    HlmSelectImports,
    HlmSkeletonComponent,
    HlmInputDirective,
    HlmLabelDirective,
    HlmCaptionComponent,
    HlmTableComponent,
    HlmTdComponent,
    HlmThComponent,
    HlmTrowComponent,
    HlmButtonDirective,
    HlmButtonDirective,
    NgIf,

    HlmButtonDirective,
    HlmSpinnerComponent,
    RessourceHumaineMarineItemComponent,
    HlmSpinnerComponent
  ],
  templateUrl: './add-marine-ressources.component.html',
  styleUrl: './add-marine-ressources.component.css'
})
export class AddMarineRessourcesComponent implements OnInit {
  @Input() fonctions!: any[];
  @Output() enregistrer = new EventEmitter<unknown>();
  @Input() typesEquipement!: any[];
  @Input() equipements!: any[];
  @Input() loading!: boolean;

  filteredEquipements: any[]=[];


  listRessourceHumaine:any[]= [];


  form_ressourceHumaine=new FormGroup({
    fonction: new FormControl('',Validators.required),
    totale: new FormControl('',[Validators.required,Validators.min(0)]),
    maximum: new FormControl(''),
    maximum_obligatoire:new FormControl(false),
  })

  form_ressourceMaterielle=new FormGroup({
    type_equipement: new FormControl('',Validators.required),
    equipements: new FormControl([],Validators.required),


  })


  addRessourceHumaine() {

    if (this.form_ressourceHumaine.invalid) {
      console.log(this.form_ressourceHumaine.errors?.['sumMismatch'])
      return;
    }

    this.listRessourceHumaine.push(this.form_ressourceHumaine.value)

    this.form_ressourceHumaine.reset()
  }


  ngOnInit(): void {
    this.form_ressourceMaterielle.get('type_equipement')?.valueChanges.subscribe((value:any) => {
      this.filteredEquipements = this.equipements.filter(e => e.type.id === value.id);
      if (this.form_ressourceMaterielle.value.equipements && this.form_ressourceMaterielle.value.equipements.length > 0) {
        this.filteredEquipements = [...this.filteredEquipements, ...this.form_ressourceMaterielle.value.equipements];
      }
    });
  }

  valider() {
    this.enregistrer.emit({ressourcesMaterielles: {equipements:this.form_ressourceMaterielle.value.equipements},ressourcesHumaines:this.listRessourceHumaine})
  }


}
