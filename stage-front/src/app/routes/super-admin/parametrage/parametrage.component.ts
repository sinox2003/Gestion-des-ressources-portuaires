import {Component, inject} from '@angular/core';

import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-parametrage',
  standalone: true,
  imports: [
    RouterOutlet

  ],
  template: `<router-outlet/>`,
})
export class ParametrageComponent {

}
