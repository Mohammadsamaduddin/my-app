import { TestBed } from '@angular/core/testing';

import { Cars1Service } from './cars1.service';

describe('Cars1Service', () => {
  let service: Cars1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cars1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
