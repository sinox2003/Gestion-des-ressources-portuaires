import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideEdit, lucideTrash2} from "@ng-icons/lucide";
import {NormeProductiviteService} from "../../../../../../../../service/norme-productivite.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";

@Component({
  selector: 'app-delete-norme-productivite-button',
  standalone: true,
  imports: [
    HlmIconComponent,
    HlmButtonDirective,
    HlmSpinnerComponent
  ], providers:[provideIcons({lucideTrash2})],
  templateUrl: './delete-norme-productivite-button.component.html',
  styleUrl: './delete-norme-productivite-button.component.css'
})
export class DeleteNormeProductiviteButtonComponent {
  @Input() norme!: any;
  @Output() refresh = new EventEmitter<unknown>();
  loading = false;

  normeProductiviteService=inject(NormeProductiviteService);


  deleteNormeProductivite( ){
    this.loading = true;
    this.normeProductiviteService.deleteNormeProductivite(this.norme.id).subscribe({
      next: () => {

        this.refresh.emit();
        this.loading = false;
      },
      error: () => {
        console.error('Erreur lors de la suppression de la norme de productivité');
        this.loading = false;
      }
    })
  }



}
