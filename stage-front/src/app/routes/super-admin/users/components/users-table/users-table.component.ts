import {Component, inject, ViewChild} from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent
} from "@spartan-ng/ui-table-helm";
import {UsersService} from "../../../../../service/users.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {HlmSkeletonComponent} from '@spartan-ng/ui-skeleton-helm';
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmSelectImports} from "@spartan-ng/ui-select-helm";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective } from '@spartan-ng/ui-alertdialog-brain';
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogOverlayDirective,
  HlmAlertDialogTitleDirective,
} from '@spartan-ng/ui-alertdialog-helm';

import {
  HlmMenuBarComponent,
  HlmMenuBarItemDirective,
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemCheckboxDirective,
  HlmMenuItemCheckComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuItemRadioComponent,
  HlmMenuItemRadioDirective,
  HlmMenuItemSubIndicatorComponent,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
  HlmSubMenuComponent,
} from '@spartan-ng/ui-menu-helm';
import {provideIcons} from "@ng-icons/core";
import {lucideLoader2, lucideMoreHorizontal, lucidePlus} from "@ng-icons/lucide";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {EditUserComponent} from "../edit-user/edit-user.component";
import {RouterLink} from "@angular/router";



@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [
    HlmCaptionComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmTableComponent,
    HlmTrowComponent,
    HlmSpinnerComponent,
    HlmSkeletonComponent,
    HlmInputDirective,
    HlmSelectImports,
    HlmIconComponent,
    BrnMenuTriggerDirective,
    HlmMenuBarComponent,
    HlmMenuBarItemDirective,
    HlmMenuComponent,
    HlmButtonDirective,
    HlmMenuGroupComponent,
    HlmMenuItemCheckboxDirective,
    HlmMenuItemCheckComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective,
    HlmMenuItemRadioComponent,
    HlmMenuItemRadioDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuShortcutComponent,
    HlmSubMenuComponent,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogComponent,
    HlmAlertDialogContentComponent,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogTitleDirective,
    BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective,
    BrnSelectImports,
    ReactiveFormsModule,
    FormsModule, EditUserComponent, HlmAlertDialogComponent, HlmAlertDialogContentComponent, HlmAlertDialogHeaderComponent, HlmAlertDialogTitleDirective, HlmAlertDialogDescriptionDirective, HlmAlertDialogFooterComponent, HlmAlertDialogCancelButtonDirective, HlmAlertDialogActionButtonDirective, HlmAlertDialogActionButtonDirective, HlmAlertDialogComponent, RouterLink
  ],
  providers:[provideIcons({lucideMoreHorizontal,lucidePlus,lucideLoader2})],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  userService = inject(UsersService);
  users: any[] = [];
  filteredUsers: any[] = [];
  loading = true; // show the loading spinner until data is fetched.
  searchValue: string = '';
  filterCriteria: string = 'matricule'; // default filter criteria
  @ViewChild('editProfileDialog') editProfileDialog!: BrnAlertDialogTriggerDirective;
  deletedUserMatricule:string;
  deleteLoading=false;
  @ViewChild("editDrawer") editDrawer!: EditUserComponent;

  openDialog(matricule: string) {
    this.deletedUserMatricule=matricule;
    this.editProfileDialog.open();
  }
  constructor() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users; // Initially, filtered users are the same as all users
        this.loading = false; // hide the loading spinner once data is fetched.
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false; // hide the loading spinner in case of error
      },
      complete: () => {
        console.log('Users fetched successfully');
      }
    });
  }

  search() {

    const filterValue = this.searchValue.toLowerCase().trim();
    this.filteredUsers = this.users.filter(user => {
        if (this.filterCriteria === 'port') {
          return user.port?.nom.toLowerCase().includes(filterValue)

        } else {
          return user[this.filterCriteria]?.toLowerCase().includes(filterValue)
        }
      }
    );
  }

  onFilterCriteriaChange(criteria: string) {
    this.filterCriteria = criteria;
    this.search(); // Reapply the search with the new criteria
  }

  deleteUser(ctx:any){
    this.deleteLoading=true;

    this.userService.deleteUser(this.deletedUserMatricule).subscribe({
      next: (response) => {
        this.deleteLoading=false;
        this.fetchUsers();
        console.log(response)
        ctx.close();
      },
      error:(error)=>{
        this.deleteLoading=false;
        console.log(error)
        ctx.close();
      }
      }
    )
  }

  openEditDrawer(user:any) {
    this.editDrawer.openDrawer(user);
  }






}
