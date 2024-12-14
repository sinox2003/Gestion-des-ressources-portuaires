import {Component, inject, OnInit} from '@angular/core';
import {HlmSeparatorDirective} from "@spartan-ng/ui-separator-helm";
import {BrnSeparatorComponent} from "@spartan-ng/ui-separator-brain";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideScanFace, lucideUsers, lucideUser, lucideAnchor, lucideLogOut, lucideSettings} from "@ng-icons/lucide";
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HlmButtonDirective, HlmButtonDirective, RouterLinkActive, HlmIconComponent, RouterLink, HlmIconComponent],
  providers:[provideIcons({lucideScanFace,lucideSettings,lucideUsers,lucideAnchor,lucideUser,lucideLogOut})],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  authenticationService=inject(AuthenticationService)
  router=inject(Router)
  currentUser:any;


  logout() {
    this.authenticationService.logout()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.currentUser=localStorage.getItem('USER')
  }
}
