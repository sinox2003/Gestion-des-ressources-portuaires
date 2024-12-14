import {Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideLoader2, lucideMinusCircle} from "@ng-icons/lucide";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
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
import {PortService} from "../../../../../service/port.service";

@Component({
  selector: 'app-delete-port',
  standalone: true,
  imports: [
    HlmIconComponent,
    HlmButtonDirective,
    HlmToasterComponent,
    BrnAlertDialogContentDirective,
    HlmAlertDialogComponent,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogContentComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective
  ],
  providers:[provideIcons({lucideMinusCircle,lucideLoader2})],
  templateUrl: './delete-port.component.html',
  styleUrl: './delete-port.component.css'
})
export class DeletePortComponent {
  @Output() refresh = new EventEmitter();
  @Input() port!: any;
  deleteLoading=false;
  @ViewChild('deleteDialog') deleteTerminal!: BrnAlertDialogTriggerDirective;
  portService=inject(PortService)


  showToast(msg: string,description: string) {
    toast(msg, {
      description: description,
    });
  }

  openDialog() {
    this.deleteTerminal.open()
  }

  supprimerPort(ctx: any) {
    this.deleteLoading=true;
    this.portService.deletePort(this.port.id).subscribe({
      next: (data) => {
        this.deleteLoading=false;
        this.showToast('Port supprimé', 'Le port a été supprimé avec succès');
        this.refresh.emit();
        ctx.close();
      },
      error: (err) => {
        console.log(err);
        this.deleteLoading=false;
      }
    })
  }
}
