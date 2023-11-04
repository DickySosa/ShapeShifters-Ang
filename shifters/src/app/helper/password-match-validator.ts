import { AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl) {
  const passwordControl = control.parent?.value.password;
  const confirmPasswordControl = control.parent?.value.confirmPassword;
  console.log('validaion fucntion','password control-->',passwordControl,'confimr control-->',confirmPasswordControl, 'control-->', control)

  if (passwordControl && confirmPasswordControl) {
    const passwordValue = passwordControl
    const confirmPasswordValue = confirmPasswordControl;

    return passwordValue === confirmPasswordValue;
  }

  return null;
}
