import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {HlmCaptionComponent, HlmTableComponent, HlmThComponent, HlmTrowComponent} from "@spartan-ng/ui-table-helm";
import {AddEquipeComponent} from "./components/add-equipe/add-equipe.component";
import {
  BrnHoverCardComponent,
  BrnHoverCardContentDirective,
  BrnHoverCardTriggerDirective
} from "@spartan-ng/ui-hovercard-brain";
import {HlmHoverCardContentComponent} from "@spartan-ng/ui-hovercard-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {PersonnelEquipeDialogComponent} from "./components/personnel-equipe-dialog/personnel-equipe-dialog.component";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideTrash2} from "@ng-icons/lucide";
import {EditEquipeComponent} from "./components/edit-equipe/edit-equipe.component";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {toast} from "ngx-sonner";
import {EquipeService} from "../../../../../../service/equipe.service";
import {OperationManutentionService} from "../../../../../../service/operation-manutention.service";

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmCaptionComponent,
    HlmTrowComponent,
    HlmThComponent,
    AddEquipeComponent,
    BrnHoverCardComponent,
    HlmHoverCardContentComponent,
    BrnHoverCardContentDirective,
    HlmHoverCardContentComponent,
    BrnHoverCardComponent,
    BrnHoverCardTriggerDirective,
    HlmButtonDirective,
    PersonnelEquipeDialogComponent,
    HlmIconComponent,
    EditEquipeComponent,
    HlmToasterComponent,
    HlmToasterComponent
  ],
  providers: [provideIcons({ lucideTrash2 })],
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent {
  @Input() operation!: any;
  @Output() refresh = new EventEmitter<unknown>();
  equipeService = inject(EquipeService);

  lastDeletedEquipe: any = null;
  @Input() operationService!: OperationManutentionService;

  removeEquipe(equipe: any) {
    this.equipeService.deleteEquipe(equipe.id).subscribe({
      next:()=>{
        this.lastDeletedEquipe = equipe; // Save the deleted equipe
        this.showSuccessfulToast(equipe);
        this.refresh.emit();
      },
      error: (err) => {
        console.log(err);
        this.showFailedToast();
      }
    });
  }

  undoDeleteEquipe(equipe:any) {
    this.operation.equipeList.push(equipe);
    this.operationService.updateOperation(this.operation).subscribe({
        next: () => {
          this.showUndoSuccessfulToast();
          this.refresh.emit();
        },
        error: (err) => {
          console.log(err);
          this.showUndoFailedToast();
        }
      });

  }



  showSuccessfulToast(equipe:any) {
    toast('Opération a réussi ', {
      description: `Equipe ${equipe.id} a été supprimée`,
      action: {
        label: 'Undo',
        onClick: () => this.undoDeleteEquipe(equipe), // Undo action
      }
    });
  }

  showFailedToast() {
    toast('Opération a échoué ', {
      description: `Equipe n'a pas été supprimée`,
    });
  }

  showUndoSuccessfulToast() {
    toast('Rétablissement réussi', {
      description: `Equipe a été rétablie`,
    });
  }

  showUndoFailedToast() {
    toast('Rétablissement échoué', {
      description: `Impossible de rétablir l'équipe`,
    });
  }
}
