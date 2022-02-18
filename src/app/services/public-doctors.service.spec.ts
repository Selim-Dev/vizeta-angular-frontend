import { TestBed } from '@angular/core/testing';

import { PublicDoctorsService } from './public-doctors.service';

describe('PublicDoctorsService', () => {
  let service: PublicDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
