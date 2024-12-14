import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import {validators} from "tailwind-merge";
import {NgIf} from "@angular/common";
import {RessourceHumaineItemComponent} from "../ressource-humaine-item/ressource-humaine-item.component";
import {sommeTotaleValidator} from "../../../../../../../../utils/form-validators.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";


@Component({
  selector: 'app-add-ressources',
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
    RessourceHumaineItemComponent,
    HlmButtonDirective,
    HlmSpinnerComponent,
    HlmScrollAreaComponent,
    HlmSpinnerComponent
  ],
  templateUrl: './add-ressources.component.html',
  styleUrl: './add-ressources.component.css'
})
export class AddRessourcesComponent implements OnInit {
  @Input() fonctions!: any[];
  @Input() accessoires!: any[];
  @Input() equipements!: any[];
  @Input() loading!: boolean;
  @Input() typesEquipement!: any[];
  @Output() enregistrer = new EventEmitter<any>();
  filteredEquipements: any[]=[];


  listRessourceHumaine:any[]= [];


  form_ressourceHumaine=new FormGroup({
      fonction: new FormControl('',Validators.required),
      totale: new FormControl('',[Validators.required,Validators.min(0)]),
      bord: new FormControl('',[Validators.required,Validators.min(0)]),
      quai: new FormControl('',[Validators.required,Validators.min(0)]),
      arriere: new FormControl('',[Validators.required,Validators.min(0)]),
      maximum: new FormControl(''),
      maximum_obligatoire:new FormControl(false),
    },{validators:[sommeTotaleValidator]})

 form_ressourceMaterielle=new FormGroup({
      type_equipement: new FormControl('',Validators.required),
      equipements: new FormControl([],Validators.required),
      accessoires: new FormControl([]),

    })







  addRessourceHumaine() {

    if (this.form_ressourceHumaine.invalid) {

      return;
    }

    this.listRessourceHumaine.push(this.form_ressourceHumaine.value)

    this.form_ressourceHumaine.reset()
  }


  ngOnInit(): void {
    this.equipements=this.equipements.filter(e=>this.typesEquipement.some(value => value.id===e.type.id))

    this.form_ressourceMaterielle.get('type_equipement')?.valueChanges.subscribe((value:any) => {
      this.filteredEquipements = this.equipements.filter(e => e.type.id === value.id);
      if (this.form_ressourceMaterielle.value.equipements && this.form_ressourceMaterielle.value.equipements.length > 0) {
        this.filteredEquipements = [...this.filteredEquipements, ...this.form_ressourceMaterielle.value.equipements];
      }
    });
  }

  valider() {
    this.enregistrer.emit({ressourcesMaterielles: {equipements:this.form_ressourceMaterielle.value.equipements,accessoires:this.form_ressourceMaterielle.value.accessoires},ressourcesHumaines:this.listRessourceHumaine})
  }
}




