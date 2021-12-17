import { Injectable } from '@angular/core';
import {BookStoreService} from "./book-store.service";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookExistsValidatorsService implements AsyncValidator {

  constructor(private bs: BookStoreService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.bs.check(control.value).pipe(
      map(exists => !exists ? null : { isbnExists: { valid: false } }),
      catchError(() => of(null))
    );
  }

}
