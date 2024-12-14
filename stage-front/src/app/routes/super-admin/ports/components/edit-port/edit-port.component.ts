import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective
} from "@spartan-ng/ui-popover-brain";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmPopoverContentDirective} from "@spartan-ng/ui-popover-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {PortService} from "../../../../../service/port.service";
import {FormsModule} from "@angular/forms";
import {provideIcons} from "@ng-icons/core";
import {lucideEdit, lucideLoader2} from "@ng-icons/lucide";

@Component({
  selector: 'app-edit-port',
  standalone: true,
	imports: [
    BrnPopoverComponent,
    HlmIconComponent,
    HlmPopoverContentDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmToasterComponent,
    FormsModule,
    HlmButtonDirective,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective
  ],
  providers:[provideIcons({lucideLoader2,lucideEdit})],
  templateUrl: './edit-port.component.html',
  styleUrl: './edit-port.component.css'
})
export class EditPortComponent {
  @Output() refresh = new EventEmitter<unknown>();
  @Input() port!: any;
  loading: any;
  nomPort: string;
  portService=inject(PortService);

  modifierNomPort(ctx: any): void {
    this.loading=true;
    let updatedPort={...this.port,nom:this.nomPort}
    this.portService.updatePort(updatedPort).subscribe({
      next: () => {
        this.refresh.emit()
        this.loading=false;
        ctx.close();

      },
      error: (err) => {
        console.log(err);
        this.loading=false;
        ctx.close();
      }
    })

  }
}
