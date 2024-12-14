import {Component, inject} from '@angular/core';
import {BrnAccordionContentComponent} from "@spartan-ng/ui-accordion-brain";
import {NgForOf} from "@angular/common";
import {PortService} from "../../../../service/port.service";
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective, HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective
} from "@spartan-ng/ui-accordion-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {TerminalItemComponent} from "./components/terminal-item/terminal-item.component";

@Component({
  selector: 'app-list-port',
  standalone: true,
  imports: [
    BrnAccordionContentComponent,
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentDirective,
    HlmAccordionIconDirective,
    HlmIconComponent,
    HlmSkeletonComponent,
    NgForOf,
    TerminalItemComponent,
  ],
  templateUrl: './list-port.component.html',
})
export class ListPortComponent {
  loading = true;
  portService=inject(PortService);
  portsList: any[] = [];

  fetchPorts(){

    this.portService.getPorts().subscribe({
      next: (data) => {
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
