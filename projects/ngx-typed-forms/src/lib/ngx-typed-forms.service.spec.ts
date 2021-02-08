import { TestBed } from '@angular/core/testing';

import { NgxTypedFormsService } from './ngx-typed-forms.service';

describe('NgxTypedFormsService', () => {
  let service: NgxTypedFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTypedFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
