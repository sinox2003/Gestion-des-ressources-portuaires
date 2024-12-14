import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {HlmCaptionComponent, HlmTableComponent, HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {AddMainTheoriqueComponent} from "./components/add-main-theorique/add-main-theorique.component";
import {AddEquipeComponent} from "../equipe/components/add-equipe/add-equipe.component";
import {
  RessourcesHumainesDialogComponent
} from "./components/ressources-humaines-dialog/ressources-humaines-dialog.component";
import {
  RessourcesMateriellesDialogComponent
} from "./components/ressources-materielles-dialog/ressources-materielles-dialog.component";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideTrash2} from "@ng-icons/lucide";
import {MainTheoriqueManutentionService} from "../../../../../../service/main-theorique-manutention.service";
import {toast} from "ngx-sonner";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {OperationManutentionService} from "../../../../../../service/operation-manutention.service";

@Component({
  selector: 'app-main-theorique',
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmCaptionComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmToasterComponent,
    AddMainTheoriqueComponent,
    AddEquipeComponent,
    RessourcesHumainesDialogComponent,
    RessourcesMateriellesDialogComponent,
    HlmIconComponent,
    HlmToasterComponent,
    HlmButtonDirective,
    HlmButtonDirective

  ],
  providers:provideIcons({lucideTrash2}),
  templateUrl: './main-theorique.component.html',
  styleUrl: './main-theorique.component.css'
})
export class MainTheoriqueComponent {
  @Output() refresh = new EventEmitter<unknown>();
  @Input() manutention!: any;
  manutentionService=inject(OperationManutentionService);
  mainTheoriqueService=inject(MainTheoriqueManutentionService);
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
    this.manutention.mainTheorique.push(main)
    console.log(this.manutention)
    this.manutentionService.updateOperation(this.manutention).subscribe({
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
