import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  if (passwordControl && confirmPasswordControl) {
    const passwordValue = passwordControl.value;
    const confirmPasswordValue = confirmPasswordControl.value;

    return passwordValue === confirmPasswordValue ? null : { passwordMismatch: true };
  }

  return null;
}
