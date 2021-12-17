import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {BookFactory} from "../../shared/book-factory";
import {Book, Thumbnail} from "../../shared/book";
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {BookExistsValidatorsService} from "../shared/book-exists-validators.service";
import {BookValidators} from "../shared/book-validators";

@Component({
  selector: 'bm-book-form-r',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormReactiveComponent implements OnInit, OnChanges {

  @Input() book?: Book;
  @Input() editing = false;

  bookForm!: FormGroup;
  @Output() submitBook = new EventEmitter<Book>();

  constructor(private fb: FormBuilder, private bookExistsValidator: BookExistsValidatorsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
    this.setFormValues(this.book!);
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  get thumbnails(): FormArray {
    return this.bookForm.get('thumbnails') as FormArray;
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl() {
    this.thumbnails.push(this.fb.group( { url: '', title: '' } ))
  }

  submitForm() {
    const formValue = this.bookForm.value;
    const authors = formValue.authors.filter((a: string) => a);
    const thumbnails = formValue.thumbnails.filter((t: Thumbnail) => t.url);
    const isbn = this.editing ? this.book!.isbn : formValue.isbn;
    const newBook: Book = {...formValue, isbn, authors, thumbnails};
    this.submitBook.emit(newBook);
    this.bookForm.reset();
  }

  private initForm() {
    if (this.bookForm) {
      return;
    }

    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      isbn: [
        { value: '', disabled: this.editing },
        [
          Validators.required, BookValidators.isbnFormat
        ],
        this.editing ? null : [this.bookExistsValidator]
      ],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      thumbnails: this.buildThumbnailsArray([ { title: '', url: '' } ]),
      published: []
    });
  }

  private setFormValues(book: Book) {
    this.bookForm.patchValue(book);
    this.bookForm.setControl('authors', this.buildAuthorsArray(book.authors));
    this.bookForm.setControl('thumbnails',
      this.buildThumbnailsArray(book.thumbnails || [{url: '', title: ''}]));
  }

  private buildAuthorsArray(values: string[]): FormArray {
    return this.fb.array(values, BookValidators.atLeastOneAuthor);
  }

  private buildThumbnailsArray(values: Thumbnail[]): FormArray {
    return this.fb.array(values.map(t => this.fb.group(t)));
  }

}
