import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, Subject, switchMap, tap} from "rxjs";
import {BookStoreService} from "../shared/book-store.service";
import {Book} from "../shared/book";

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyUp$ = new Subject<string>();
  isLoading = false;
  foundBooks: Book[] = [];

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.keyUp$
      .pipe(
        filter(term => term.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap(term => this.bs.getAllSearch(term)),
        tap(() => this.isLoading = false)
      )
      .subscribe(books => this.foundBooks = books);
  }

}
