import { TestBed } from '@angular/core/testing';

import { AbsenceCongeService } from './absence-conge.service';

describe('AbsenceCongeService', () => {
  let service: AbsenceCongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsenceCongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
