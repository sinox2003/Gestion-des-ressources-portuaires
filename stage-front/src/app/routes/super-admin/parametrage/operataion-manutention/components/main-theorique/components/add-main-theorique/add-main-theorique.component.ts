import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import {HlmSelectImports, HlmSelectOptionComponent} from '@spartan-ng/ui-select-helm';
import {PrestationService} from "../../../../../../../../service/prestation.service";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {TraficService} from "../../../../../../../../service/trafic.service";
import {FonctionService} from "../../../../../../../../service/fonction.service";
import {EquipementService} from "../../../../../../../../service/equipement.service";
import {AccessoireService} from "../../../../../../../../service/accessoire.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {forkJoin} from "rxjs";
import {AddRessourcesComponent} from "../add-ressources/add-ressources.component";
import {OperationManutentionService} from "../../../../../../../../service/operation-manutention.service";
import {TypeTraficService} from "../../../../../../../../service/type-trafic.service";
import {TypeEquipementService} from "../../../../../../../../service/type-equipement.service";

@Component({
  selector: 'app-add-main-theorique',
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
    AddRessourcesComponent
  ],
  templateUrl: './add-main-theorique.component.html',
  styleUrl: './add-main-theorique.component.css'
})
export class AddMainTheoriqueComponent implements OnInit{
  @Input() manutention!: any;
  @Output() refresh = new EventEmitter<unknown>();
  manutentionService=inject(OperationManutentionService);
  loading=false;
  prestationService=inject(PrestationService);
  typeTraficService=inject(TypeTraficService);
  traficService=inject(TraficService);
  fonctionService=inject(FonctionService);
  equipementService=inject(EquipementService);
  accessoireService=inject(AccessoireService);
  typeEquipementService=inject(TypeEquipementService);
  fonctionList:any[]=[];
  equipementList: any[]=[];
  accessoireList: any[]=[];
  typesEquipementList: any[]=[];
  ressourcesLoading=false;
  showRessources=false;

  prestationLoading=true;
  traficLoading=true;
  typeTraficLoading=true;

  prestationList:any[]=[];
  traficList:any[]=[];
  filteredTraficList:any[]=[]; //
  typeTraficList:Set<any>;

  form=new FormGroup({
    nom:new FormControl('',Validators.required),
    prestation:new FormControl(null,Validators.required),
    typeTrafic:new FormControl(null,Validators.required),
    trafic:new FormControl(null,Validators.required),

  })
  @Output() toggleShow = new EventEmitter<unknown>();



  ngOnInit(): void {
    this.fetchPrestationList();
    this.fetchTypeTraficList();
    this.fetchTraficList();

    this.form.get('typeTrafic')?.valueChanges.subscribe((value:any) => {
      this.traficLoading=false;
      this.filteredTraficList=this.traficList.filter(trafic =>  trafic.typeTrafic.id === value.id )
    });

  }


  fetchPrestationList(){

    this.prestationService.getManutention_Prestations().subscribe({
      next: (data) => {
        this.prestationList=data;
        this.prestationLoading=false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  fetchTraficList(){
    this.traficService.getAllTrafics().subscribe({
      next: (data) => {
        this.traficList=data;
        console.log(this.traficList)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  fetchTypeTraficList() {
    this.typeTraficService.getTrafic_Types().subscribe({
      next: (data) => {
        this.typeTraficList=data;
        this.typeTraficLoading=false;
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
      accessoires: this.accessoireService.getAccessoires(),
      typesEquipements: this.typeEquipementService.get_Type_equipements_byTrafic(this.form.value.trafic),
    }).subscribe({
      next: (results) => {
        this.fonctionList = results.fonctions;
        this.equipementList = results.equipements;
        this.accessoireList = results.accessoires;
        this.typesEquipementList = results.typesEquipements;
        this.ressourcesLoading = false;
      },
      error: (err) => {
        console.log(err);
        // this.ressourcesLoading = false;
      }
    });
  }

  enregistrer($event: any) {
    this.loading = true;
    this.manutention.mainTheorique.push({...this.form.value,...$event})
    console.log(this.manutention)
    this.manutentionService.updateOperation(this.manutention).subscribe({
      next: () => {
        this.loading = false;
        this.toggleShow.emit()
        this.refresh.emit();
      },
      error: () => {
        this.loading = false;
      }
    })

  }
}
