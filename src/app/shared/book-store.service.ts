import { Injectable } from '@angular/core';
import {Book} from "./book";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, retry, throwError} from "rxjs";
import {BookRaw} from "./book-raw";
import {BookFactory} from "./book-factory";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://api4.angular-buch.com/secure';

  // books: Book[]

  constructor(private http: HttpClient) {
    // this.books = [
    //   {
    //     isbn: '9783864907791',
    //     title: 'Angular',
    //     authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
    //     published: new Date(2020, 8, 1),
    //     subtitle: 'Grundlagen, fortgeschrittene Themen, und Best Practices',
    //     rating: 5,
    //     thumbnails: [{
    //       url: 'https://ng-buch.de/angular-cover.jpg',
    //       title: 'Buchcover'
    //     }],
    //     description: 'Lernen Sie Angular mit diesem Praxisbuch!'
    //   }, {
    //     isbn: '9783864905520',
    //     title: 'React',
    //     authors: ['Oliver Zeigermann', 'Nils Hartmann'],
    //     published: new Date(2019, 11, 12),
    //     subtitle: 'Grundlagen, fortgeschrittene Techniken und Praxistipps',
    //     rating: 3,
    //     thumbnails: [{
    //       url: 'https://ng-buch.de/react-cover.jpg',
    //       title: 'Buchcover'
    //     }],
    //     description: 'Das bewàhrte und umfassende Praxisbuch zu React.'
    //   }
    // ];
  }

  // getAll(): Book[] {
  //   return this.books;
  // }
  //
  // getSingle(isbn?: string): Book | undefined {
  //   return this.books.find( b => b.isbn === isbn );
  // }

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(brs => brs.map(br => BookFactory.fromRaw(br))),
        catchError(this.errorHandler)
      );
  }

  getSingle(isbn?: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/book/${isbn}`)
      .pipe(
        retry(3),
        map(br => BookFactory.fromRaw(br)),
        catchError(this.errorHandler)
      );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(brs => brs.map(br => BookFactory.fromRaw(br))),
        catchError(this.errorHandler)
      )
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`, { responseType: 'text' } )
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(book: Book): Observable<any> {
    return this.http.put(`${this.api}/book/${book.isbn}`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  check(isbn: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.api}/book/${isbn}/check`).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Ein Fehler ist aufgetreten!');
    return throwError(() => error);
  }

}
