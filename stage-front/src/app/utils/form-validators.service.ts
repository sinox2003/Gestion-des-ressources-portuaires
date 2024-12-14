import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {


}


export function sommeTotaleValidator(group: AbstractControl): ValidationErrors | null {
  const bord = group.get('bord')?.value || 0;
  const quai = group.get('quai')?.value || 0;
  const arriere = group.get('arriere')?.value || 0;
  const totale = group.get('totale')?.value || 0;

  return bord + quai + arriere === totale ? null : { sumMismatch: true };
}

export function ramadanDatesValidator (control : AbstractControl):ValidationErrors | null  {
    const ramadanStartDate=control.get('ramadanStartDate')?.value || 0;
    const ramadanEndDate=control.get('ramadanEndDate')?.value || 0;

    if(ramadanStartDate && ramadanEndDate && ramadanStartDate > ramadanEndDate) {
      return { ramadanDatesMismatch: true };
    }
    return null;

}
