import { TestBed } from '@angular/core/testing';

import { DqtableService } from './dqtable.service';

describe('DqtableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DqtableService = TestBed.get(DqtableService);
    expect(service).toBeTruthy();
  });
});
