import { TestBed, inject } from '@angular/core/testing';

import { GetValueOfCurrencyService } from './get-value-of-currency.service';

describe('GetValueOfCurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetValueOfCurrencyService]
    });
  });

  it('should be created', inject([GetValueOfCurrencyService], (service: GetValueOfCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
