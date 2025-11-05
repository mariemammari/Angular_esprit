import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function futurDateValidator(days: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    const minDate = new Date();
    minDate.setHours(0,0,0,0);
    minDate.setDate(today.getDate() + days);

    if (isNaN(selectedDate.getTime()) || selectedDate < minDate) {
      return { futureDateInvalid: `La date doit être dans le futur, minimum ${days} jours à partir d'aujourd'hui.` };
    }
    return null;
  };
}
