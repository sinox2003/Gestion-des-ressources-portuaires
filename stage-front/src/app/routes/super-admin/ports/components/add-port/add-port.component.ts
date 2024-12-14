import {Component, EventEmitter, inject, Output} from '@angular/core';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideGitBranchPlus, lucideLoader2, lucidePlusCircle} from "@ng-icons/lucide";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective, HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {FormsModule} from "@angular/forms";
import {PortService} from "../../../../../service/port.service";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {toast} from "ngx-sonner";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";

@Component({
  selector: 'app-add-port',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmButtonDirective,
    HlmIconComponent,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmCardFooterDirective,
    HlmButtonDirective,
    FormsModule,
    HlmToasterComponent,
    HlmSpinnerComponent,
    HlmButtonDirective
  ],
  providers:[provideIcons({lucidePlusCircle,lucideLoader2})],
  templateUrl: './add-port.component.html',
  styleUrl: './add-port.component.css'
})
export class AddPortComponent {
  nomPort: string;
  portService=inject(PortService)
  loading=false;
  @Output() refresh= new EventEmitter();
  isCardOpen: boolean=false;

  createPort() {
    this.loading=true;
    this.portService.createPort({nom: this.nomPort}).subscribe({
      next: () => {
        this.loading=false;
        this.showToast("Port a ete creer","Vous pouvez ajouter de terminaux")
        this.nomPort='';
        this.refresh.emit();
        this.isCardOpen=false;
      },
      error: (err) => {
        console.log(err);
        this.showToast("Operation a echoue","Erreur")

        this.loading=false;
      }
     });

  }


  showToast(msg: string,description: string) {
    toast(msg, {
      description: description,
    });
  }

  toggleCard(){
    this.isCardOpen=!this.isCardOpen;
  }


}
