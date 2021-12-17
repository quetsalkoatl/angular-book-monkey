import {AbstractControl, FormArray, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class BookValidators {

  static isbnFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) { return null; }
    const numbers = control.value.replace(/-/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13})/;
    return isbnPattern.test(numbers) ? null : { isbnFormat: { valid: false } };
  }

  static atLeastOneAuthor(control: AbstractControl): ValidationErrors | null {
    const controlArray = control as FormArray;
    return controlArray.controls.some(el => el.value) ? null : { atLeastOneAuthor: { valid: false } };
  }

 }
