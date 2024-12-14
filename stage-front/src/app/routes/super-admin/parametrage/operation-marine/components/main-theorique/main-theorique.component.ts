import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {provideIcons} from "@ng-icons/core";
import {lucideTrash2} from "@ng-icons/lucide";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmCaptionComponent, HlmTableComponent, HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {AddMarineMainTheoriqueComponent} from "./components/add-marine-main-theorique/add-marine-main-theorique.component";
import {
  AddMainTheoriqueComponent
} from "../../../operataion-manutention/components/main-theorique/components/add-main-theorique/add-main-theorique.component";
import {OperationManutentionService} from "../../../../../../service/operation-manutention.service";
import {MainTheoriqueManutentionService} from "../../../../../../service/main-theorique-manutention.service";
import {toast} from "ngx-sonner";
import {OperationMarineService} from "../../../../../../service/operation-marine.service";
import {MainTheoriqueMarineService} from "../../../../../../service/main-theorique-marine.service";
import {
  RessourcesHumainesMarineDialogComponent
} from "./components/ressources-humaines-marine-dialog/ressources-humaines-marine-dialog.component";
import {
  RessourcesMateriellesMarineDialogComponent
} from "./components/ressources-materielles-marine-dialog/ressources-materielles-marine-dialog.component";

@Component({
  selector: 'app-main-theorique',
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmCaptionComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmToasterComponent,
    HlmIconComponent,
    HlmToasterComponent,
    HlmButtonDirective,
    HlmButtonDirective,
    AddMarineMainTheoriqueComponent,
    AddMainTheoriqueComponent,
    RessourcesHumainesMarineDialogComponent,
    RessourcesMateriellesMarineDialogComponent

  ],
  providers:provideIcons({lucideTrash2}),
  templateUrl: './main-theorique.component.html',
  styleUrl: './main-theorique.component.css'
})
export class MainTheoriqueComponent {

  @Input() operation!: any;
  @Output() refresh =new EventEmitter<any>();
  marineService=inject(OperationMarineService);
  mainTheoriqueService=inject(MainTheoriqueMarineService);
  show=false;


  removeMainTheorique(main: any) {
    this.mainTheoriqueService.deleteMainTheoriqueById(main.id).subscribe({
      next: () => {
        this.refresh.emit();
        this.showSuccessfulToast(main)
      },
      error: () => {
        this.showFailedToast()
      }
    })
  }

  showSuccessfulToast(main:any) {
    toast('Opération a réussi ', {
      description: `Main theorique ${main.nom} a été supprimée`,
      action: {
        label: 'Undo',
        onClick: () => this.undoDeleteEquipe(main), // Undo action
      }
    });
  }

  undoDeleteEquipe(main:any) {
    this.operation.mainTheorique.push(main)
    console.log(this.operation)
    this.marineService.updateOperation(this.operation).subscribe({
      next: () => {
        this.showUndoSuccessfulToast()
        this.refresh.emit();
      },
      error: () => {
        this.showUndoFailedToast()
      }
    })

  }

  showFailedToast() {
    toast('Opération a échoué ', {
      description: `Main theorique n'a pas été supprimée`,
    });
  }

  showUndoSuccessfulToast() {
    toast('Rétablissement réussi', {
      description: `Main a été rétablie`,
    });
  }

  showUndoFailedToast() {
    toast('Rétablissement échoué', {
      description: `Impossible de rétablir ce main`,
    });
  }

  toggleShow(){
    this.show=!this.show;
  }

}
