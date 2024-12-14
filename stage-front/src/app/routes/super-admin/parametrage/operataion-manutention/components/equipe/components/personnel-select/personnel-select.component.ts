import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output
} from '@angular/core';
import {BrnSelectComponent, BrnSelectImports} from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {FonctionService} from "../../../../../../../../service/fonction.service";
import { FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MembrePersonnelService} from "../../../../../../../../service/membre-personnel.service";
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective
} from "@spartan-ng/ui-popover-brain";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmPopoverContentDirective} from "@spartan-ng/ui-popover-helm";
import {HlmCheckboxComponent} from "@spartan-ng/ui-checkbox-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideChevronDown} from "@ng-icons/lucide";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";
import {HlmSeparatorDirective} from "@spartan-ng/ui-separator-helm";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";

@Component({
  selector: 'app-personnel-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BrnSelectImports,
    HlmSelectImports,
    HlmLabelDirective,
    ReactiveFormsModule,
    BrnSelectComponent,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    HlmIconComponent,
    HlmPopoverContentDirective,
    HlmCheckboxComponent,
    HlmButtonDirective,
    BrnPopoverContentDirective,
    HlmScrollAreaComponent,
    HlmSeparatorDirective,
    NgIf,
    HlmSkeletonComponent,
  ],
  providers: [provideIcons({ lucideChevronDown })],
  templateUrl: './personnel-select.component.html',
  styleUrls: ['./personnel-select.component.css']
})
export class PersonnelSelectComponent implements OnInit {

  fonctionService = inject(FonctionService);
  fonctions: any[] = [];
  selectedMembers: any[] = [];
  personnel: any[] = [];
  filteredPersonnel: any[] = [];
  previousFonctionId:number | null = null;
  personnelService = inject(MembrePersonnelService);
  currentRoute=inject(ActivatedRoute);
  terminalId:number;
  fonctionLoading=false;
  personnelLoading=false;
  private cdRef=inject(ChangeDetectorRef);
  form = new FormGroup({
    fonctions: new FormControl(),

  });
  @Output() setPersonnel = new EventEmitter<unknown>();

  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.terminalId=params['terminalId'];
    })
    this.fetchFonctions();
    this.fetchPersonnel();
    this.form.get('fonctions')?.valueChanges.subscribe((value: any) => {
      this.filteredPersonnel = this.personnel.filter(m => value.some((fonction: any) => m.fonction.id === fonction.id));
      this.selectedMembers=this.selectedMembers.filter(m => this.form.value.fonctions.some((fonction: any) => m.fonction.id ===fonction.id));

      this.selectPersonnel();
    });
  }

  fetchFonctions() {
    this.fonctionLoading=true;
    this.fonctionService.getFonctions().subscribe({
      next: (data) => {
        this.fonctionLoading=false;
        this.fonctions = data;
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  fetchPersonnel() {
    this.personnelLoading=true;
    this.personnelService.getPersonnelByTerminalIdWithoutEquipe(this.terminalId).subscribe({
      next: (data) => {
        this.personnel = data;
        this.personnelLoading=false;
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });


  }

  onCheckboxChange($event: any, membre: any) {
    if ($event) {
      this.selectedMembers.push(membre);
    } else {
      this.selectedMembers=this.selectedMembers.filter(m => m.matricule !== membre.matricule)
    }

    this.selectPersonnel();

  }

  isChecked(membre:any) {
    return this.selectedMembers.some(m => m.matricule === membre.matricule)
  }

  selectPersonnel() {
    this.setPersonnel.emit(this.selectedMembers);
  }

  isNewFonction(currentFonctionId: number, ctx: { closed: any; }): boolean {
    if(ctx.closed){
      this.previousFonctionId=null;
    }
    console.log(this.previousFonctionId ,currentFonctionId)
    if (this.previousFonctionId !== currentFonctionId) {
      this.previousFonctionId = currentFonctionId;
      return true;
    }
    return false;
  }

}
