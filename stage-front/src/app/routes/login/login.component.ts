import {Component, inject} from "@angular/core";
import {FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";
import {CommonModule} from "@angular/common";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HlmButtonDirective,
    HlmSpinnerComponent,
    HlmIconComponent

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formBuilder=inject(FormBuilder)

  loginForm=this.formBuilder.group(
    {
      matricule: ['', Validators.required],
      mdp: ['', Validators.required]
    }
  )

  loading: boolean = false;
  error: boolean = false;

  router=inject(Router)
  authService=inject(AuthenticationService)


  login() {

    this.loading=true;
    this.error=false;
    this.authService.login({ matricule:this.loginForm.value.matricule ?? '', mdp:this.loginForm.value.mdp ?? ''}).subscribe({
      next: () => {
        this.loading=false;
        if(this.guideByProfile("SUPER_ADMIN")){
          this.router.navigateByUrl('super-admin');
        }

      },

      error: (error) => {
        console.error('Error logging in:', error);
        this.error=true;
        this.loading=false;

      }
    });

  }

  guideByProfile(profile:string):boolean{
    return this.authService.getCurrentAuthUser().authorities.some((a:any )=> a.authority === profile)
  }

}
