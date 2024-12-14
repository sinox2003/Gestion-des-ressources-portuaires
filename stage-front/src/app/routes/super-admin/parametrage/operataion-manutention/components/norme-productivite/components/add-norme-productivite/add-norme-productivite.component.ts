import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {HlmSelectImports, HlmSelectOptionComponent} from "@spartan-ng/ui-select-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {TraficService} from "../../../../../../../../service/trafic.service";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {NgIf} from "@angular/common";
import {HlmCheckboxComponent} from "@spartan-ng/ui-checkbox-helm";
import { BrnRadioComponent, BrnRadioGroupComponent } from '@spartan-ng/ui-radiogroup-brain';
import {
  HlmRadioDirective,
  HlmRadioGroupDirective,
  HlmRadioIndicatorComponent,
} from '@spartan-ng/ui-radiogroup-helm';
import {OperationManutentionService} from "../../../../../../../../service/operation-manutention.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {NormeProductiviteService} from "../../../../../../../../service/norme-productivite.service";



@Component({
  selector: 'app-add-norme-productivite',
  standalone: true,
  imports: [
    BrnRadioComponent, BrnRadioGroupComponent,
    HlmRadioDirective,
    HlmRadioGroupDirective,
    HlmRadioIndicatorComponent,
    ReactiveFormsModule,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmLabelDirective,
    BrnSelectImports, HlmSelectImports, HlmSkeletonComponent, NgIf, HlmSelectOptionComponent, HlmInputDirective, HlmCheckboxComponent, HlmButtonDirective, HlmSpinnerComponent, HlmSpinnerComponent,
  ],
  templateUrl: './add-norme-productivite.component.html',
  styleUrl: './add-norme-productivite.component.css'
})
export class AddNormeProductiviteComponent implements OnInit {

  @Output() toggleVisible = new EventEmitter<unknown>();
  @Input() manutention!: any;
  @Input() selectedNorme!: any;
  @Output() refresh = new EventEmitter<unknown>();

  normeProductiviteService=inject(NormeProductiviteService);

  traficService=inject(TraficService);
  traficLoading=false;
  traficList: any[]=[];

  manutentionService=inject(OperationManutentionService);
  loading=false;

  mainTheoriqueList: any[] = [];


  form = new FormGroup({
    id : new FormControl(null),
    trafic : new FormControl(null,Validators.required),
    mainTheorique : new FormControl(null,Validators.required),
    mode : new FormControl(null,Validators.required),
    norme : new FormControl('',Validators.required),
    sensExport : new FormControl(false,Validators.required),
    sensImport : new FormControl(false,Validators.required),
    natureSuivi : new FormControl('',Validators.required)
  })


  fetchTraficList(){
    this.traficLoading=true;
    this.traficService.getAllTrafics().subscribe({
      next: (data) => {
        this.traficList=data;
        this.traficLoading=false;
        if(this.selectedNorme){
          this.patchValues(this.selectedNorme)
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.fetchTraficList();

    this.form.get('trafic')?.valueChanges.subscribe({
      next: (value: any) => {
        this.mainTheoriqueList=this.manutention.mainTheorique.filter((m :any)=> m.typeTrafic.id===value.typeTrafic.id )
      }
    })
  }

  ajouter() {
    if (this.form.invalid) {
      return;
    }
    if(this.form.value.id){
      this.loading=true;
      this.normeProductiviteService.updateNormeProductivite(this.form.value).subscribe({
        next: () => {
          this.loading=false;
          this.refresh.emit()
        },
        error: (error) => {
          console.log(error)
        }
      })
    }else{

      this.manutention.normeProductiviteSet.push(this.form.value)
      this.loading=true;
      this.manutentionService.updateOperation(this.manutention).subscribe({
        next: () => {
          this.loading=false;
          this.refresh.emit()
        },
        error: (error) => {
          console.log(error)
        }
      })
    }



  }

  patchValues(norme:any) {

    console.log(norme)
    this.form.patchValue({
      id: norme.id,
      trafic: this.traficList.find((t:any) => {
        this.mainTheoriqueList=this.manutention.mainTheorique.filter((m :any)=> m.typeTrafic.id===norme.mainTheorique.typeTrafic.id )
        return t.id === norme.trafic.id
      }),
      mainTheorique: this.mainTheoriqueList.find((m :any)=> m.id===norme.mainTheorique.id ) || {},
      mode: norme.mode,
      norme: norme.norme,
      sensExport: norme.sensExport,
      sensImport: norme.sensImport,
      natureSuivi: norme.natureSuivi
    })
  }


}
