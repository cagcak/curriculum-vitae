/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { LocalStorageService } from './localstorage.service';

describe('Service: Localstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
  });

  it('should ...', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));
});
