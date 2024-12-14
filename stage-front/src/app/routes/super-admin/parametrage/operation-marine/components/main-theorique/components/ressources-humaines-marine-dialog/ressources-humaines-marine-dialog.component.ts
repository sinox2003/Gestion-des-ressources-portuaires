import {Component, Input} from '@angular/core';
import {BrnDialogContentDirective, BrnDialogTriggerDirective} from "@spartan-ng/ui-dialog-brain";
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective, HlmDialogFooterComponent, HlmDialogHeaderComponent,
  HlmDialogTitleDirective
} from "@spartan-ng/ui-dialog-helm";
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";

@Component({
  selector: 'app-ressources-humaines-marine-dialog',
  standalone: true,
  imports: [
    BrnDialogContentDirective,
    HlmCaptionComponent,
    HlmTableComponent,
    HlmTdComponent,
    HlmThComponent,
    HlmTrowComponent,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogDescriptionDirective,
    HlmDialogFooterComponent,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective,
    BrnDialogTriggerDirective,
    HlmCaptionComponent,
    HlmScrollAreaComponent,
    HlmButtonDirective,
  ],
  templateUrl: './ressources-humaines-marine-dialog.component.html',
  styleUrl: './ressources-humaines-marine-dialog.component.css'
})
export class RessourcesHumainesMarineDialogComponent {
  @Input() listRessourceHumaine!: any;

}
