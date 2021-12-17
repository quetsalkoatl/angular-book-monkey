import { TestBed } from '@angular/core/testing';

import { BookExistsValidatorsService } from './book-exists-validators.service';

describe('BookExistsValidatorsService', () => {
  let service: BookExistsValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookExistsValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
