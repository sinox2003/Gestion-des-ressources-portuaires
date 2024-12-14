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
import {toast} from "ngx-sonner";
import {PortService} from "../../../../../service/port.service";
import {FormsModule} from "@angular/forms";
import {provideIcons} from "@ng-icons/core";
import {lucideLoader2} from "@ng-icons/lucide";

@Component({
  selector: 'app-add-terminal',
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
  providers:[provideIcons({lucideLoader2})],
  templateUrl: './add-terminal.component.html',
  styleUrl: './add-terminal.component.css'
})
export class AddTerminalComponent {

  @Input() port :any ;
  @Output() refresh=new EventEmitter();
  portService=inject(PortService);
  nomTerminal: string;
  loading=false;


  ajouterTerminal(ctx:any){
    this.loading=true;
        this.port.terminals.push({nom:this.nomTerminal,operationManutention:{},operationMarine:{},operationLogistique:{}})
        this.portService.updatePort(this.port).subscribe({
          next: () => {
            this.refresh.emit();
            this.loading=false;
            this.showToast(this.port.nom);
            ctx.close();
          },
          error: (err) => {
            console.log(err);
            this.loading=false;
            ctx.close();
          }
        });

  }


  showToast(nomPort:string){
    toast('Terminal a été créé', {
      description: `Terminal ${this.nomTerminal} a été affecté au port ${nomPort}`,
    });
  }

}
