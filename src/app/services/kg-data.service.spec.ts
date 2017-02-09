/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KgDataService } from './kg-data.service';

describe('KgDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KgDataService]
    });
  });

  it('should ...', inject([KgDataService], (service: KgDataService) => {
    expect(service).toBeTruthy();
  }));
});
