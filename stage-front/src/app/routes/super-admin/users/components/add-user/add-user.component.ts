import {Component, EventEmitter, inject, Output} from '@angular/core';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideUserPlus,lucideChevronUp,lucideChevronDown,lucideLoader2} from "@ng-icons/lucide";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators} from "@angular/forms";
import {UsersService} from "../../../../../service/users.service";
import {PortService} from "../../../../../service/port.service";
import {ProfileService} from "../../../../../service/profile.service";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmIconComponent,
    HlmButtonDirective,
    HlmIconComponent,
    HlmLabelDirective,
    HlmInputDirective,
    BrnSelectImports, HlmSelectImports, HlmButtonDirective, HlmButtonDirective, HlmButtonDirective, ReactiveFormsModule,
  ],
  providers:[provideIcons({lucideUserPlus,lucideLoader2, lucideChevronUp, lucideChevronDown})],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  formBuilder=inject(FormBuilder)
  userService=inject(UsersService)
  portService=inject(PortService)
  profileService=inject(ProfileService)
  ports:any[]=[];
  profiles:any[]=[];
  loading=false;
  @Output() refresh=new EventEmitter();

  constructor(userService:UsersService) {
    this.portService.getPorts().subscribe({
      next: (res) => {
        this.ports=res;
      },
      error: (err)=> {
        console.log(err)
      }
    })

    this.profileService.getProfiles().subscribe({
      next: (res) => {
        this.profiles=res;

      },
      error: (err)=> {
        console.log(err)
      }
    })

  }

  addedUser=this.formBuilder.group(
    {
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mdp: ['', [Validators.required, Validators.minLength(5)]],
      confirmMdp: ['', Validators.required],
      port: ['', Validators.required],
      profiles: [[], Validators.required]
    },{
      validator: this.mustMatch('mdp', 'confirmMdp')
    }
  )

  addUserIsVisible = false;

  toggleAddUser() {
    this.addUserIsVisible =!this.addUserIsVisible;
  }

  addUser(){
    if(this.addedUser.valid){
      this.loading=true;

      const matricule=this.addedUser.value.matricule;
      const nom=this.addedUser.value.nom;
      const prenom=this.addedUser.value.prenom;
      const mdp=this.addedUser.value.mdp;
      const addedProfiles=this.addedUser.value.profiles;

      const selectedPorts=this.ports.filter(port => port.id===this.addedUser.value.port);
      const port=selectedPorts[0];
      const profiles=this.profiles.filter(profile => addedProfiles.includes(profile.id));

      this.userService.addUser({ matricule,nom,prenom,mdp,port, profiles}).subscribe({
        next: (res) => {
          this.refresh.emit();
          this.loading=false;
        },
        error: (err) => {
          console.log(err);
          this.loading=false;

        }
      });

      this.addedUser.reset();

    }
  }

  private mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        matchingControl?.setErrors(null);
        return null;
      }
    };
  }
}
