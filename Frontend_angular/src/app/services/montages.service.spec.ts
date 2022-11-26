import { TestBed } from '@angular/core/testing';

import { MontagesService } from './montages.service';

describe('MontagesService', () => {
  let service: MontagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
