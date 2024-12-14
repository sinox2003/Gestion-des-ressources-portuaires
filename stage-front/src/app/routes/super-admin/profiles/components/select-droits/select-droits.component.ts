import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { HlmIconComponent } from "@spartan-ng/ui-icon-helm";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { provideIcons } from "@ng-icons/core";
import { lucideBookPlus } from "@ng-icons/lucide";
import { HlmScrollAreaComponent } from "@spartan-ng/ui-scrollarea-helm";
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import { DroitService } from "../../../../../service/droit.service";
import { HlmCheckboxComponent } from "@spartan-ng/ui-checkbox-helm";
import { FormsModule } from "@angular/forms";
import {ProfileService} from "../../../../../service/profile.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";


@Component({
  selector: 'app-select-droits',
  standalone: true,
  imports: [
    HlmIconComponent,
    HlmButtonDirective,
    HlmScrollAreaComponent,
    HlmTableComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmCheckboxComponent,
    HlmCaptionComponent,
    FormsModule,
    HlmSpinnerComponent,
  ],
  providers: [provideIcons({ lucideBookPlus })],
  templateUrl: './select-droits.component.html',
  styleUrls: ['./select-droits.component.css'] // Fix typo: styleUrl -> styleUrls
})
export class SelectDroitsComponent implements OnInit{

  isShown = false;
  droitService = inject(DroitService);
  profileService = inject(ProfileService);
  droitList: any[] = [];
  loading = true;
  selectedDroits: any[] = [];
  @Input() currentProfile!: any;
  @Output() refresh=new EventEmitter();
  updateLoading=false;

  constructor() {

    this.droitService.getDroits().subscribe({
      next: (droits) => {
        this.droitList = droits;
        this.loading = false; // Hide the loading spinner once data is fetched.
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }



  toggleSelectDroit() {
    this.isShown = !this.isShown;
    if (!this.isShown) {
      this.selectedDroits = [];
    }
  }

  addDroitsToUser() {
    this.updateLoading=true;
    this.currentProfile.droits = this.selectedDroits;
    this.profileService.updateProfile(this.currentProfile).subscribe({
      next: () => {
        console.log('Profile updated successfully');
        this.isShown = false;
        this.updateLoading=false;
        this.refresh.emit();
      },
      error: (error) => {
        console.error('Error:', error);
        this.updateLoading=false;

      }
    })
  }

  onCheckboxChange(event: any, droit: any) {

    if (event) {
      this.selectedDroits.push(droit);
    } else {
      this.selectedDroits = this.selectedDroits.filter(d => d.id !== droit.id);
    }
  }

  isChecked(id:number) {
    return this.currentProfile.droits.find((d: { id: number; }) => d.id === id);
  }

  protected readonly console = console;

  ngOnInit(): void {
    if (this.currentProfile.droits.length > 0) {

      this.selectedDroits=[...this.currentProfile.droits];
    }
  }
}
