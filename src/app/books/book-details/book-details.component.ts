import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/book";
import {BookStoreService} from "../../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;
  // @Input() book?: Book;
  // @Output() showListEvent = new EventEmitter<any>();

  constructor(private bs: BookStoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap
    this.bs.getSingle(params.get('isbn')!).subscribe(b => this.book = b);
  }

  getRating(num?: number) {
    return new Array(num ?? 0);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book!.isbn).subscribe( res =>
        this.router.navigate(['../'], { relativeTo: this.route } )
      );
    }
  }

  // showBookList() {
  //   this.showListEvent.emit();
  // }

}
