import {Component, EventEmitter, inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {
  BrnDialogComponent,
  BrnDialogContentDirective, BrnDialogDescriptionDirective,
  BrnDialogTitleDirective,
  BrnDialogTriggerDirective
} from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmTableComponent, HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import { lucideUserMinus} from "@ng-icons/lucide";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";
import {PersonnelSelectComponent} from "../personnel-select/personnel-select.component";
import {EquipeService} from "../../../../../../../../service/equipe.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-personnel-equipe-dialog',
  standalone: true,
  imports: [
    BrnDialogContentDirective, BrnDialogTriggerDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogDescriptionDirective,
    HlmDialogFooterComponent,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective, HlmButtonDirective, BrnDialogTitleDirective, BrnDialogDescriptionDirective, HlmButtonDirective, HlmTableComponent, HlmTrowComponent, HlmThComponent, HlmIconComponent, HlmScrollAreaComponent, HlmIconComponent, HlmDialogFooterComponent, PersonnelSelectComponent, HlmDialogComponent, HlmSpinnerComponent, NgIf,
  ],
  providers: [provideIcons({ lucideUserMinus })],
  templateUrl: './personnel-equipe-dialog.component.html',
  styleUrl: './personnel-equipe-dialog.component.css'
})
export class PersonnelEquipeDialogComponent implements OnInit{
  @Input() equipe!: any;
  personnel:any[]=[]
  addedPersonnel:any[]=[]
  isComboBoxOpen=false;
  equipeService=inject(EquipeService);
  @Output() refresh = new EventEmitter<unknown>();
  loading=false;

  removePersonnel(membre: any){
    this.personnel=this.personnel.filter((p: any)=>p.matricule!==membre.matricule);
  }

  ngOnInit(): void {
    this.refreshPersonnelList();
  }


  refreshPersonnelList() {
    this.personnel=this.equipe.personnel.sort((a: { fonction: { id: number; }; }, b: { fonction: { id: number; }; }) =>a.fonction.id - b.fonction.id);
  }

  toggleComboBox() {
    this.isComboBoxOpen=!this.isComboBoxOpen;
  }

  setAddedPersonnel($event: any) {
    this.addedPersonnel=$event;
  }


  onClose() {
    this.refreshPersonnelList()
     }

  submit() {
    this.loading=true;
    this.equipe.personnel=[...this.personnel,...this.addedPersonnel];
    this.equipeService.updateEquipe(this.equipe).subscribe({
      next: () => {
        this.loading=false;
        this.refresh.emit();
        this.addedPersonnel=[]
        this.isComboBoxOpen=false;
        this.refreshPersonnelList();
      },
      error: (err) => {
        this.loading=false;
        console.log(err);
      }
    })
  }

  cancelAddingPersonnel() {
    this.addedPersonnel=[]
    this.toggleComboBox()
  }
}
