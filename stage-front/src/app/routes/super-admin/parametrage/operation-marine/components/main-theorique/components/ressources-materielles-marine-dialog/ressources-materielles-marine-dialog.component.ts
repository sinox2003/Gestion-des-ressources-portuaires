import {Component, Input} from '@angular/core';
import {BrnDialogContentDirective, BrnDialogTriggerDirective} from "@spartan-ng/ui-dialog-brain";
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent, HlmDialogHeaderComponent, HlmDialogTitleDirective
} from "@spartan-ng/ui-dialog-helm";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";

@Component({
  selector: 'app-ressources-materielles-marine-dialog',
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
  templateUrl: './ressources-materielles-marine-dialog.component.html',
  styleUrl: './ressources-materielles-marine-dialog.component.css'
})
export class RessourcesMateriellesMarineDialogComponent {
  @Input() listRessourceMaterielle!: any;

}
