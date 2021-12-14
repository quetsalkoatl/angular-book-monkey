import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormReactiveComponent } from './book-form.component';

describe('BookFormComponent', () => {
  let component: BookFormReactiveComponent;
  let fixture: ComponentFixture<BookFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
