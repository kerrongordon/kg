/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KgUserService } from './kg-user.service';

describe('KgUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KgUserService]
    });
  });

  it('should ...', inject([KgUserService], (service: KgUserService) => {
    expect(service).toBeTruthy();
  }));
});
