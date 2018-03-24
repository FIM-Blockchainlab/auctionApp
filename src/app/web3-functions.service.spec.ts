import { TestBed, inject } from '@angular/core/testing';

import { Web3FunctionsService } from './web3-functions.service';

describe('Web3FunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Web3FunctionsService]
    });
  });

  it('should be created', inject([Web3FunctionsService], (service: Web3FunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
