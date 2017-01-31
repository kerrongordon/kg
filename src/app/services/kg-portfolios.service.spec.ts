/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KgPortfoliosService } from './kg-portfolios.service';

describe('KgPortfoliosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KgPortfoliosService]
    });
  });

  it('should ...', inject([KgPortfoliosService], (service: KgPortfoliosService) => {
    expect(service).toBeTruthy();
  }));
});
