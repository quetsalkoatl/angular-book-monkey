import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {BookFormComponent} from "./book-form/book-form.component";
import {BookFormReactiveComponent} from "./book-form-reactive/book-form.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {FormMessagesComponent} from "./form-messages/form-messages.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateValueAccessorModule} from "angular-date-value-accessor";


@NgModule({
  declarations: [
    BookFormComponent,
    BookFormReactiveComponent,
    CreateBookComponent,
    FormMessagesComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ]
})
export class AdminModule { }
