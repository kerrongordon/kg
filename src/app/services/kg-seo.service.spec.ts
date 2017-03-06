import { TestBed, inject } from '@angular/core/testing';
import { KgSeoService } from './kg-seo.service';

describe('KgSeoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KgSeoService]
    });
  });

  it('should ...', inject([KgSeoService], (service: KgSeoService) => {
    expect(service).toBeTruthy();
  }));
});
