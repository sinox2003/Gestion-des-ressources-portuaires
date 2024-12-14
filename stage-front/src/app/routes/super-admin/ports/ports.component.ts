import {Component, inject, OnInit} from '@angular/core';
import {PortService} from "../../../service/port.service";

import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';

import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {NgForOf} from "@angular/common";
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective
} from "@spartan-ng/ui-popover-brain";
import {HlmPopoverContentDirective} from "@spartan-ng/ui-popover-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {FormsModule} from "@angular/forms";
import {TerminalService} from "../../../service/terminal.service";
import {HlmToasterComponent} from "@spartan-ng/ui-sonner-helm";
import {toast} from "ngx-sonner";
import {provideIcons} from "@ng-icons/core";
import {lucidePlus, lucideMoreVertical} from "@ng-icons/lucide";
import {
  HlmMenuComponent,
  HlmMenuGroupComponent, HlmMenuItemDirective,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent
} from "@spartan-ng/ui-menu-helm";
import {BrnMenuTriggerDirective} from "@spartan-ng/ui-menu-brain";
import {TerminalItemComponent} from "./components/terminal-item/terminal-item.component";
import {AddTerminalComponent} from "./components/add-terminal/add-terminal.component";
import {AddPortComponent} from "./components/add-port/add-port.component";
import {DeletePortComponent} from "./components/delete-port/delete-port.component";
import {EditPortComponent} from "./components/edit-port/edit-port.component";


@Component({
  selector: 'app-ports',
  standalone: true,
  imports: [
    HlmAccordionContentDirective,
    HlmAccordionDirective,
    HlmAccordionIconDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmIconComponent,
    BrnAccordionContentComponent,
    HlmSkeletonComponent,
    NgForOf,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmButtonDirective,
    FormsModule,
    HlmToasterComponent,
    HlmButtonDirective,
    HlmIconComponent,
    HlmIconComponent,
    HlmMenuComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuGroupComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemDirective,
    BrnMenuTriggerDirective,
    HlmButtonDirective,
    HlmIconComponent,
    HlmButtonDirective,
    TerminalItemComponent,
    AddTerminalComponent,
    AddPortComponent,
    DeletePortComponent,
    EditPortComponent
  ],
  providers:[provideIcons({lucidePlus,lucideMoreVertical})],
  templateUrl: './ports.component.html',
  styleUrl: './ports.component.css'
})
export class PortsComponent implements OnInit{
  loading = true;
  portService=inject(PortService);
  portsList: any[] = [];

  fetchPorts(){

    this.portService.getPorts().subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.portsList = data;
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
      }
     });

  }

  ngOnInit(): void {
    this.fetchPorts();
  }


}
