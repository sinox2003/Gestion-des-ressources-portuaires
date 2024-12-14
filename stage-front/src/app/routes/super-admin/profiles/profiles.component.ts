import {Component, inject} from '@angular/core';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {BrnHoverCardModule} from '@spartan-ng/ui-hovercard-brain';
import {HlmHoverCardModule} from '@spartan-ng/ui-hovercard-helm';
import {ProfileService} from "../../../service/profile.service";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {
  lucideBookMarked,
  lucideBookOpen, lucideBookPlus,
  lucideChevronRight,
  lucideClipboardList,
  lucideCopyMinus
} from '@ng-icons/lucide';
import {provideIcons} from "@ng-icons/core";
import {NgClass, NgForOf} from "@angular/common";
import {SelectDroitsComponent} from "./components/select-droits/select-droits.component";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";


@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [
    BrnAccordionContentComponent,
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentDirective,
    HlmAccordionIconDirective, BrnHoverCardModule, HlmHoverCardModule, HlmButtonDirective, HlmIconComponent,
    HlmIconComponent, HlmButtonDirective, NgClass, SelectDroitsComponent, HlmSpinnerComponent, HlmSkeletonComponent, NgForOf,
  ],
  providers:[provideIcons({lucideBookMarked,lucideBookPlus,lucideBookOpen,lucideClipboardList , lucideCopyMinus,lucideChevronRight})],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {

  profileService=inject(ProfileService);
  profileList: any;
  loading = true;

  constructor() {
    this.fetchProfiles();
  }

  fetchProfiles(){
    this.profileService.getProfiles().subscribe({
      next: (data) => {
        this.profileList = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error getting profiles:', error);
        this.loading = false;
      }
    });
  }


  removeDroit(profile: any, droit: any) {
    profile.droits = profile.droits.filter((d: { id: number }) => d.id !== droit.id)
    this.profileService.updateProfile(profile).subscribe({
      next: () => {
        console.log('Profile updated successfully');
        this.fetchProfiles();
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }
}
