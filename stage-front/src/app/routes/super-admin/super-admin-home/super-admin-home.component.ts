import {Component} from '@angular/core';

import {SidebarComponent} from "../sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-super-admin-home',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './super-admin-home.component.html',

})
export class SuperAdminHomeComponent {



}
