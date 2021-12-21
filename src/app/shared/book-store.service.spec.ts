import {inject, TestBed} from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import {of} from "rxjs";
import {Book} from "./book";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {BookRaw} from "./book-raw";

describe('BookStoreService', () => {

  let service: BookStoreService;

  const expectedBooks = [
    { isbn: '111', title: 'Book 1', authors: [], published: new Date() },
    { isbn: '222', title: 'Book 2', authors: [], published: new Date() },
  ];
  const bookRaw: BookRaw[] = [
    { isbn: '111', title: 'Book 1', authors: [], published: '2019-01-01T00:00:00.000Z'},
    { isbn: '222', title: 'Book 2', authors: [], published: '2019-01-01T00:00:00.000Z'}
  ];

  let httpStub;
  let httpMock1: { get: any; };
  let httpMock: HttpTestingController;
  beforeEach(() => {
    httpStub = { get: () => of(expectedBooks) };
    httpMock1 = { get: () => of(expectedBooks) };
    spyOn(httpMock1, 'get').and.callThrough();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        // { provide: HttpClient, useValue: httpStub },
        // { provide: HttpClient, useValue: httpMock1 },
        BookStoreService
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookStoreService);

  });

  it('should GET a list of all books', inject([BookStoreService], (service: BookStoreService) => {
    let receivedBooks!: Book[];
    service.getAll().subscribe(b => receivedBooks = b);

    const req = httpMock.expectOne('https://api4.angular-buch.com/secure/books');
    expect(req.request.method).toEqual('GET');
    req.flush(bookRaw);

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');
    // expect(httpMock1.get).toHaveBeenCalledTimes(1);
    // expect(httpMock1.get).toHaveBeenCalledWith('https://api4.angular-buch.com/secure/books');

    expect(receivedBooks[0].published).toEqual(new Date('2019-01-01T00:00:00.000Z'));

  }));

  afterEach(() => {
    httpMock.verify();
  });
});
