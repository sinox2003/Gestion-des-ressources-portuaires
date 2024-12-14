import {Component, inject, OnInit} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../service/users.service";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {
  BrnCollapsibleComponent,
  BrnCollapsibleContentComponent,
  BrnCollapsibleTriggerDirective
} from "@spartan-ng/ui-collapsible-brain";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmSkeletonComponent} from "@spartan-ng/ui-skeleton-helm";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-mon-compte',
  standalone: true,
  imports: [
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmLabelDirective,
    BrnCollapsibleComponent,
    BrnCollapsibleContentComponent,
    BrnCollapsibleTriggerDirective,
    HlmButtonDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmLabelDirective,
    HlmButtonDirective,
    HlmSpinnerComponent,
    HlmSpinnerComponent,
    HlmSkeletonComponent,
    NgForOf,
  ],
  templateUrl: './mon-compte.component.html',
  styleUrl: './mon-compte.component.css'
})
export class MonCompteComponent implements OnInit {

  route=inject(ActivatedRoute)
  userService=inject(UsersService)
  params=this.route.params;
  matricule:string;
  user: any;
  userLoading=false;
  mdp=null;
  mdpLoading= false;


  ngOnInit() {
    this.params.subscribe(params => {
        this.getUser(params['matricule']);
    });


  }


  getUser(matricule:string){
    this.userLoading=true;
    this.userService.getUser(matricule).subscribe({
      next: (user) => {
        this.user=user;
        console.log(user)
        this.userLoading=false;
      },
      error: (error) => {
        console.error(error);
        this.userLoading=false;
      }
    })
  }

}
