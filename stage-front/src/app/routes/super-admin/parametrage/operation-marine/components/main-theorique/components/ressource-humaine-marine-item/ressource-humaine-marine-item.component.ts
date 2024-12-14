import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {sommeTotaleValidator} from "../../../../../../../../utils/form-validators.service";
import {BrnSheetTriggerDirective} from "@spartan-ng/ui-sheet-brain";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {HlmCheckboxComponent} from "@spartan-ng/ui-checkbox-helm";
import {HlmSelectImports} from "@spartan-ng/ui-select-helm";
import {HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideCheck, lucideEdit, lucideTrash2} from "@ng-icons/lucide";

@Component({
  selector: 'app-ressource-humaine-marine-item',
  standalone: true,
  imports: [
    BrnSelectImports,
    HlmSelectImports,
    HlmTrowComponent,
    HlmThComponent,
    HlmButtonDirective,
    BrnSheetTriggerDirective,
    HlmIconComponent,
    HlmIconComponent,
    ReactiveFormsModule,
    HlmInputDirective,
    HlmCheckboxComponent
  ],
  providers: [provideIcons({ lucideEdit,lucideTrash2,lucideCheck})],
  templateUrl: './ressource-humaine-marine-item.component.html',
  styleUrl: './ressource-humaine-marine-item.component.css'
})
export class RessourceHumaineMarineItemComponent implements OnInit {
  @Input() ressource!: any;
  @Input() listRessourceHumaine!: any[];
  edit=false;
  @Input() fonctions!: any[];
  form_ressourceHumaine=new FormGroup({
    fonction: new FormControl('',Validators.required),
    totale: new FormControl('',[Validators.required,Validators.min(0)]),
    bord: new FormControl('',[Validators.required,Validators.min(0)]),
    quai: new FormControl('',[Validators.required,Validators.min(0)]),
    arriere: new FormControl('',[Validators.required,Validators.min(0)]),
    maximum: new FormControl(''),
    maximum_obligatoire:new FormControl(false),
  },{validators:[sommeTotaleValidator]})
  @Input() index!: number;



  removeRessource(): void {
    this.listRessourceHumaine.splice(this.index, 1);
    console.log(this.listRessourceHumaine)

  }

  toggleEditBox(): void {
    this.edit =!this.edit;
  }

  ngOnInit(): void {
    console.log(this.ressource,this.fonctions)
    this.form_ressourceHumaine.patchValue(this.ressource);
    this.form_ressourceHumaine.get(['maximum','maximum_obligatoire'])?.valueChanges.subscribe(value => {
      this.ressource={...this.ressource,...this.form_ressourceHumaine.get(['maximum','maximum_obligatoire'])}
      console.log(this.ressource)
    })

  }

  editRessource(){
    this.ressource=this.form_ressourceHumaine.value
    this.edit=false;
    console.log(this.ressource)

  }
}
