import {Component, inject, Input, OnInit} from '@angular/core';
import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective
} from "@spartan-ng/ui-dialog-brain";
import {NgIf} from "@angular/common";
import {PersonnelSelectComponent} from "../../../equipe/components/personnel-select/personnel-select.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RessourceHumaineItemComponent} from "../ressource-humaine-item/ressource-humaine-item.component";
import {FonctionService} from "../../../../../../../../service/fonction.service";
import {sommeTotaleValidator} from "../../../../../../../../utils/form-validators.service";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';

import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmScrollAreaComponent} from "@spartan-ng/ui-scrollarea-helm";



@Component({
  selector: 'app-ressources-humaines-dialog',
  standalone: true,
  imports: [
    HlmSelectImports, BrnSelectImports,
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
    NgIf,
    PersonnelSelectComponent,
    FormsModule,
    ReactiveFormsModule,
    RessourceHumaineItemComponent, HlmButtonDirective, HlmInputDirective, HlmLabelDirective, HlmScrollAreaComponent
  ],
  templateUrl: './ressources-humaines-dialog.component.html',
  styleUrl: './ressources-humaines-dialog.component.css'
})
export class RessourcesHumainesDialogComponent {
  @Input() listRessourceHumaine!: any;






}
