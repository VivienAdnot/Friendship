/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageDaoService } from './local-storage-dao.service';

describe('LocalStorageDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageDaoService]
    });
  });

  it('should ...', inject([LocalStorageDaoService], (service: LocalStorageDaoService) => {
    expect(service).toBeTruthy();
  }));
});
