import { Component } from '@angular/core';
import {Book} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bm-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  constructor(private bs: BookStoreService, private route: ActivatedRoute, private router: Router) { }

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.router.navigate(['../..', 'books'], { relativeTo: this.route });
    })
  }

}
