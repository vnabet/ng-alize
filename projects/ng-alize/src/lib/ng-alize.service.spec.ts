import { TestBed } from '@angular/core/testing';

import { NgAlizeService } from './ng-alize.service';

describe('NgAlizeService', () => {
  let service: NgAlizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAlizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
