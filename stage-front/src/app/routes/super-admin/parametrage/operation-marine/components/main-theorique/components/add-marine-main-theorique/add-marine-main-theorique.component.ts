import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PrestationService} from "../../../../../../../../service/prestation.service";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {NavireService} from "../../../../../../../../service/navire.service";
import {forkJoin} from "rxjs";
import {FonctionService} from "../../../../../../../../service/fonction.service";
import {EquipementService} from "../../../../../../../../service/equipement.service";
import {OperationMarineService} from "../../../../../../../../service/operation-marine.service";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {HlmSelectImports, HlmSelectOptionComponent} from "@spartan-ng/ui-select-helm";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {AddMarineRessourcesComponent} from "../add-marine-ressources/add-marine-ressources.component";
import {TypeEquipementService} from "../../../../../../../../service/type-equipement.service";

@Component({
  selector: 'app-add-marine-main-theorique',
  standalone: true,
  imports: [
    HlmButtonDirective,
    ReactiveFormsModule,
    BrnSelectImports,
    HlmSelectImports,
    HlmLabelDirective,
    HlmInputDirective,
    HlmSkeletonComponent,
    HlmSelectOptionComponent,
    HlmSpinnerComponent,
    AddMarineRessourcesComponent,
  ],
  templateUrl: './add-marine-main-theorique.component.html',
  styleUrl: './add-marine-main-theorique.component.css'
})
export class AddMarineMainTheoriqueComponent implements OnInit{
  @Output() refresh = new EventEmitter<unknown>();
  @Input() operation!: any;


  marineService=inject(OperationMarineService);
  loading=false;

  prestationService=inject(PrestationService);
  prestationLoading=true;
  prestationList:any[]=[];

  navires:any[]=[];
  naviresLoading=true;
  navireService=inject(NavireService);

  showRessources=false;
  ressourcesLoading=false;

  fonctionService=inject(FonctionService);
  fonctionList:any[]=[];

  equipementService=inject(EquipementService);
  equipementList: any[]=[];

  typeEquipementService=inject(TypeEquipementService);
  typesEquipementList: any[]=[];

  form=new FormGroup({
    nom:new FormControl('',Validators.required),
    prestation:new FormControl('',Validators.required),
    navire:new FormControl('',Validators.required)
  })
  @Output() toggleShow = new EventEmitter<unknown>();



  ngOnInit(): void {
    this.fetchPrestationList();
    this.fetchNaviresListe();

  }

  fetchPrestationList(){

    this.prestationService.getMarine_Prestations().subscribe({
      next: (data) => {
        this.prestationList=data;
        console.log(this.prestationList)
        this.prestationLoading=false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  fetchNaviresListe(){
    this.navireService.getAllNavires().subscribe({
      next: (data) => {
        this.navires=data;
        console.log(this.navires);
        this.naviresLoading=false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  chagerRessources() {
    this.ressourcesLoading = true;
    this.showRessources = true;

    forkJoin({
      fonctions: this.fonctionService.getFonctions(),
      equipements: this.equipementService.getEquipements(),
      typesEquipements: this.typeEquipementService.get_Type_equipements(),
    }).subscribe({
      next: (results) => {
        this.fonctionList = results.fonctions;
        this.equipementList = results.equipements;
        this.typesEquipementList = results.typesEquipements;
        this.ressourcesLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.ressourcesLoading = false;
      }
    });
  }

  enregistrer($event: any) {
    this.loading = true;
    this.operation.mainTheorique.push({...{nom:this.form.value.nom,prestation:this.form.value.prestation,navire:this.form.value.navire},...$event})
    console.log(this.operation)
    this.marineService.updateOperation(this.operation).subscribe({
      next: () => {
        this.loading = false;
        this.toggleShow.emit();
        this.refresh.emit();
      },
      error: () => {
        this.loading = false;
      }
    })

  }



}
