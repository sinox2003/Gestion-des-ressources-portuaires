import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {OperationManutentionService} from "../../../../service/operation-manutention.service";
import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent, HlmTabsPaginatedListComponent,
  HlmTabsTriggerDirective
} from "@spartan-ng/ui-tabs-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {ModeTravailComponent} from "./components/mode-travail/mode-travail.component";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideArrowLeft} from "@ng-icons/lucide";
import {PeriodeShiftComponent} from "./components/periode-shift/periode-shift.component";
import {EquipeComponent} from "./components/equipe/equipe.component";
import {PlanRoulementComponent} from "./components/plan-roulement/plan-roulement.component";
import {MainTheoriqueComponent} from "./components/main-theorique/main-theorique.component";
import {NormeProductiviteComponent} from "./components/norme-productivite/norme-productivite.component";

@Component({
  selector: 'app-operataion-manutention',
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
    NormeProductiviteComponent,
  ],
  providers:[provideIcons({lucideArrowLeft})],
  templateUrl: './operataion-manutention.component.html',
  styleUrl: './operataion-manutention.component.css'
})
export class OperataionManutentionComponent implements OnInit {

  currentRoute=inject(ActivatedRoute);
  manutentionService=inject(OperationManutentionService);
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
      this.manutentionService.getOperation(this.manutentionId).subscribe({
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
