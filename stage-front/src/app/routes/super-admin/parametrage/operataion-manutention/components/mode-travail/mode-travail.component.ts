import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BrnRadioComponent, BrnRadioGroupComponent } from '@spartan-ng/ui-radiogroup-brain';
import {
  HlmRadioDirective,
  HlmRadioGroupDirective,
  HlmRadioIndicatorComponent,
} from '@spartan-ng/ui-radiogroup-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { FormsModule } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIf } from '@angular/common';
import { OperationManutentionService } from '../../../../../../service/operation-manutention.service';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
  selector: 'app-mode-travail',
  standalone: true,
  imports: [
    HlmLabelDirective,
    HlmRadioGroupDirective,
    HlmRadioIndicatorComponent,
    HlmRadioDirective,
    BrnRadioComponent,
    BrnRadioGroupComponent,
    FormsModule,
    HlmButtonDirective,
    NgIf,
    HlmSpinnerComponent,
    HlmButtonDirective,
  ],
  templateUrl: './mode-travail.component.html',
  styleUrls: ['./mode-travail.component.css'],
})
export class ModeTravailComponent {
  @Input() operation!: any;
  @Output() refresh = new EventEmitter<unknown>();

  semaine: any;
  jour: any;
  error = false;
  loading = false;
  edit = false;
  @Input() operationService!: OperationManutentionService;

  update(): void {
    if (!this.semaine || !this.jour) {
      this.error = true;
      return;
    }
    if(this.operation.modeTravail) {
      this.operation.modeTravail = {id:this.operation.modeTravail.id, semaine: this.semaine, jour: this.jour };
    }else {
      this.operation.modeTravail = { semaine: this.semaine, jour: this.jour };
    }

    this.loading = true;
    console.log(this.operation)

    this.operationService.updateOperation(this.operation).subscribe({
      next: () => {
        this.loading = false;
        this.error = false;
        this.refresh.emit();
        this.edit=false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
        this.edit=false;

      },
    });
  }

  toggleEditBox(): void {
    this.edit = !this.edit;
  }
}
