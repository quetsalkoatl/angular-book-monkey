import {Component, Input} from '@angular/core';
import {AbstractControl, NgModel} from "@angular/forms";

@Component({
  selector: 'bm-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent {

  @Input() control!: NgModel | AbstractControl;
  @Input() controlName!: string;

  private allMessages: {[index: string]: any} = {
    title: {
      required: 'Ein Buchtitel muss angegeben werden.'
    },
    isbn: {
      required: 'Es miss eine ISBN angegeben werden.',
      minlength: 'Die ISBN muss min. 10 Zeichen haben.',
      maxlength: 'Die ISBN darf höchstens 13 Zeichen haben.'
    },
    published: {
      required: 'Es muss ein Erscheinungsdatum angegeben werden'
    },
    authors: {
      required: 'Es muss ein Autor angegeben werden.'
    }
  };

  constructor() { }

  errorsForControl(): string[] | null {
    const messages = this.allMessages[this.controlName];
    if (!this.control || !this.control.errors || !messages || !this.control.dirty) {
      return null;
    }
    return Object.keys(this.control.errors).map(err => messages[err]);
  }

}
