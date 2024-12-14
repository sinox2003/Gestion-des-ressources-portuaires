import {Component, inject} from '@angular/core';
import {EquipeComponent} from "../operataion-manutention/components/equipe/equipe.component";
import {ModeTravailComponent} from "../operataion-manutention/components/mode-travail/mode-travail.component";
import {PeriodeShiftComponent} from "../operataion-manutention/components/periode-shift/periode-shift.component";
import {PlanRoulementComponent} from "../operataion-manutention/components/plan-roulement/plan-roulement.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsPaginatedListComponent,
  HlmTabsTriggerDirective
} from "@spartan-ng/ui-tabs-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {OperationMarineService} from "../../../../service/operation-marine.service";
import {provideIcons} from "@ng-icons/core";
import {lucideArrowLeft} from "@ng-icons/lucide";
import {MainTheoriqueComponent} from "./components/main-theorique/main-theorique.component";

@Component({
  selector: 'app-operation-marine',
  standalone: true,
  imports: [
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
    HlmTabsPaginatedListComponent,
    HlmButtonDirective,
    HlmButtonDirective,
    ModeTravailComponent,
    HlmSpinnerComponent,
    HlmIconComponent,
    RouterLink,
    HlmIconComponent,
    PeriodeShiftComponent,
    EquipeComponent,
    PlanRoulementComponent,
    MainTheoriqueComponent,

  ],
  providers:[provideIcons({lucideArrowLeft})],
  templateUrl: './operation-marine.component.html',
  styleUrl: './operation-marine.component.css'
})
export class OperationMarineComponent {
  currentRoute=inject(ActivatedRoute);
  marineService=inject(OperationMarineService);
  operation: any;
  nomTerminal:string;
  nomPort:string;
  manutentionId:number;
  tab:number=1;
  loading=false;

  ngOnInit(): void {
    this.loading=true;
    this.currentRoute.params.subscribe(
      params => {
        this.manutentionId=params['operationId'];
        this.nomTerminal = params['nomTerminal'];
        this.nomPort = params['nomPort'];
        this.getOperationsManutention();

      }
    );
  }

  getOperationsManutention(){
    if(this.manutentionId){
      this.marineService.getOperation(this.manutentionId).subscribe({
          next: (data) => {
            this.operation = data;
            console.log(this.operation);
            this.loading=false;
          },
          error: (err) => {
            console.error('Error getting manutention:', err);
            this.loading=false;
          }
        }
      );
    }
  }

  setTab(tab:number){
    this.tab=tab;
  }

}
