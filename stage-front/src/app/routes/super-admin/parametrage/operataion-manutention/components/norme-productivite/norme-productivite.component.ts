import {Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';

import {HlmCaptionComponent, HlmTableComponent, HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";

import {AddNormeProductiviteComponent} from "./components/add-norme-productivite/add-norme-productivite.component";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideEdit, lucideTrash2} from "@ng-icons/lucide";
import {NormeProductiviteService} from "../../../../../../service/norme-productivite.service";
import {
  DeleteNormeProductiviteButtonComponent
} from "./components/delete-norme-productivite-button/delete-norme-productivite-button.component";

@Component({
  selector: 'app-norme-productivite',
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmCaptionComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmButtonDirective,
    AddNormeProductiviteComponent,
    HlmButtonDirective,
    HlmIconComponent,
    DeleteNormeProductiviteButtonComponent
  ],
  providers:[provideIcons({lucideEdit})],
  templateUrl: './norme-productivite.component.html',
  styleUrl: './norme-productivite.component.css'
})
export class NormeProductiviteComponent {
  @Output() refresh = new EventEmitter<unknown>();
  @Input() manutention!: any;
  @ViewChild('addNormeProductiviteComponent') addNorme !:AddNormeProductiviteComponent;

  isVisible = false;
  selectedNorme:any;

  toggleVisible() {
    this.isVisible=!this.isVisible;
    if(!this.isVisible){
      this.selectedNorme=null;
    }
  }


  selectNorme(norme: any) {

    if(this.isVisible){
      this.addNorme.patchValues(norme)
    }else{
      this.selectedNorme=norme;
      this.isVisible=true;
    }

  }
}
