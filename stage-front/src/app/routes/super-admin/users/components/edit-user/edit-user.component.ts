import {Component, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCross,lucideChevronDown, lucideChevronUp ,lucideLoader2} from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,

} from '@spartan-ng/ui-sheet-helm';
import { UsersService } from "../../../../../service/users.service";
import { PortService } from "../../../../../service/port.service";
import { ProfileService } from "../../../../../service/profile.service";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {HlmSelectImports} from "@spartan-ng/ui-select-helm";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    ReactiveFormsModule,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmLabelDirective,
    HlmSelectImports, BrnSelectImports, NgForOf
  ],
  providers: [provideIcons({ lucideCross,lucideChevronUp, lucideChevronDown, lucideLoader2 })],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'] // Note it's "styleUrls" for an array
})
export class EditUserComponent {

  formBuilder = inject(FormBuilder);
  userService = inject(UsersService);
  portService = inject(PortService);
  profileService = inject(ProfileService);
  @ViewChild('drawer') drawerTrigger!: BrnSheetTriggerDirective;
  user: any;
  ports: any[] = [];
  profiles: any[] = [];
  loading = false;  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data is fetched.  // show the loading spinner until data
  @Output() refresh=new EventEmitter();

  userForm = this.formBuilder.group({
    matricule: ['',Validators.required],
    nom: ['',Validators.required],
    prenom: ['',Validators.required],
    port: ['',],
    profiles: [[],Validators.required]
  });

  constructor() {
    // Fetch ports and profiles on component initialization
    this.portService.getPorts().subscribe(data => this.ports = data);
    this.profileService.getProfiles().subscribe(data => this.profiles = data);
  }

  openDrawer(user: any) {
    this.user = user;
    this.userForm.patchValue(user);
    if(user.port){
      this.userForm.get('port')?.setValue(user.port.id);  // Set selected port from user's port object to form control.  // Set selected profiles from user's profiles array to form control.''
    }
    this.userForm.get('profiles')?.setValue(user.profiles.map((p: { id: any; }) => p.id));  // Set selected profiles from user's profiles array to form control.'
    this.drawerTrigger.open();
  }

  onSubmit(ctx:any) {
    if (this.userForm.valid) {
      this.loading = true;

      const { matricule, nom, prenom, profiles: modifiedProfiles, port: selectedPortId } = this.userForm.value;

      const port = this.ports.find(port => port.id === selectedPortId);
      // @ts-ignore
      const profiles = this.profiles.filter(profile => modifiedProfiles.includes(profile.id));

      const user = { matricule, nom, prenom, port, profiles };

      this.userService.updateUser(user).subscribe({
        next: (res) => {
          // Emit an event or call a method to refresh the parent component or do something after the user is successfully added
          this.refresh.emit();
          this.loading = false;
          ctx.close();
        },
        error: (err) => {
          console.error(err);
          // Optionally add a user-facing error message here
          this.loading = false;
          ctx.close();

        }
      });
    }
  }


}
