import { Component } from '@angular/core';

// type ViewState = 'list' | 'details';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-monkey';
  // book?: Book;
  // viewState: ViewState = 'list';
  //
  // showList() {
  //   this.viewState = 'list';
  // }
  //
  // showDetails(book: Book) {
  //   this.book = book;
  //   this.viewState = 'details';
  // }
}