import {Component, EventEmitter, inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective} from "@spartan-ng/ui-alertdialog-brain";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TerminalService} from "../../../../../../service/terminal.service";
import {PortService} from "../../../../../../service/port.service";
import {toast} from "ngx-sonner";
import {BrnMenuTriggerDirective} from "@spartan-ng/ui-menu-brain";
import {provideIcons} from "@ng-icons/core";
import {lucideLoader2, lucideMoreVertical} from "@ng-icons/lucide";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {
  HlmMenuComponent,
  HlmMenuGroupComponent, HlmMenuItemDirective,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent
} from "@spartan-ng/ui-menu-helm";
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent, HlmAlertDialogDescriptionDirective, HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent, HlmAlertDialogTitleDirective
} from "@spartan-ng/ui-alertdialog-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {Router, RouterLink} from "@angular/router";

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
    HlmAlertDialogActionButtonDirective,
    HlmIconComponent,
    RouterLink
  ],
  providers: [provideIcons({lucideLoader2,lucideMoreVertical})],
  templateUrl: './terminal-item.component.html',
})
export class TerminalItemComponent  {
  @Input() terminal:any;
  @Input() port:any;
  @Output() refresh=new EventEmitter();
  router=inject(Router)


}
