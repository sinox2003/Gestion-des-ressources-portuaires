import {Component, EventEmitter, inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrnMenuTriggerDirective} from "@spartan-ng/ui-menu-brain";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {
  HlmMenuComponent,
  HlmMenuGroupComponent, HlmMenuItemDirective,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent
} from "@spartan-ng/ui-menu-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {TerminalService} from "../../../../../service/terminal.service";
import {provideIcons} from "@ng-icons/core";
import {lucideLoader2} from "@ng-icons/lucide";
import {PortService} from "../../../../../service/port.service";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {toast} from "ngx-sonner";
import {BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective} from "@spartan-ng/ui-alertdialog-brain";
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent, HlmAlertDialogDescriptionDirective, HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent, HlmAlertDialogTitleDirective
} from "@spartan-ng/ui-alertdialog-helm";

@Component({
  selector: 'app-terminal-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BrnMenuTriggerDirective,
    FormsModule,
    HlmButtonDirective,
    HlmIconComponent,
    HlmMenuComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmToasterComponent,
    HlmAlertDialogComponent,
    HlmAlertDialogContentComponent,
    BrnAlertDialogTriggerDirective,
    HlmAlertDialogContentComponent,
    BrnAlertDialogContentDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogActionButtonDirective
  ],
  providers: [provideIcons({lucideLoader2})],
  templateUrl: './terminal-item.component.html',
  styleUrl: './terminal-item.component.css'
})
export class TerminalItemComponent implements OnInit {
  isShown=true;
  @Input() terminal:any;
  @Input() port:any;
  @Output() refresh=new EventEmitter();
  modifyingTerminalValue: string;
  terminalService = inject(TerminalService);
  portService = inject(PortService);
  loading=false;
  deleteLoading=false;
  @ViewChild('deleteDialog') deleteTerminal!: BrnAlertDialogTriggerDirective;

  toggleModifyingTerminal(){
    this.isShown =!this.isShown;
  }

  modifierNomTerminal( ){
    this.loading=true;
    this.terminal.nom=this.modifyingTerminalValue;
    this.terminalService.updateTerminal(this.terminal).subscribe({
      next: (data) => {
        this.toggleModifyingTerminal();
        this.loading=false;
      },
      error: (err) => {
        console.log(err);
        this.loading=false;
      }
    });

  }


  supprimerTerminal(ctx: any) {
    this.deleteLoading = true;

    let updatedPort = { ...this.port };
    updatedPort.terminals = this.port.terminals.filter((term: any) => term.id !== this.terminal.id);

    // Update the port to reflect the removal of the terminal
    this.portService.updatePort(updatedPort).subscribe({
      next: () => {
        this.terminalService.deleteTerminalById(this.terminal.id).subscribe({
          next: () => {
            this.refresh.emit()
            this.deleteLoading = false;
            this.showToast('Terminal supprimé', `Le terminal ${this.terminal.nom} a été désaffecté du port ${this.port.nom}`);
            ctx.close();
          },
          error: (err) => {
            this.deleteLoading = false;
            this.refresh.emit()
            this.showToast('Opération échouée', `Le terminal ${this.terminal.nom} n'a pas été désaffecté du port ${this.port.nom}`);
            console.error(err);
            ctx.close();
          }
        });
      },
      error: (err) => {
        this.deleteLoading = false;
        this.showToast('Opération échouée', 'Une erreur est survenue lors de la mise à jour du port.');
        console.error(err);
        ctx.close();
      }
    });
  }



  showToast(msg: string,description: string) {
    toast(msg, {
      description: description,
    });
  }


  ngOnInit(): void {
    this.modifyingTerminalValue=this.terminal.nom;
  }

  openDialog() {
    this.deleteTerminal.open()
  }
}
