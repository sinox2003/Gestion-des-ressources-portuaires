import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {MonCompteComponent} from "../../../mon-compte/mon-compte.component";
import {provideIcons} from "@ng-icons/core";
import {lucideArrowLeft} from "@ng-icons/lucide";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink,
    HlmIconComponent,
    MonCompteComponent
  ],
  providers:[provideIcons({lucideArrowLeft})],
  templateUrl: './user-details.component.html',

})
export class UserDetailsComponent {

}
