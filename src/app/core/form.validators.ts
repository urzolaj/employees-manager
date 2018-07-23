import { AbstractControl } from '@angular/forms';

export function alphanumericValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  const re = /^[a-z0-9 ]+$/i;
  return re.test(control.value) ? null : {'alphanum': true};
}
