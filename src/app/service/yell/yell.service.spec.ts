import { TestBed, inject } from '@angular/core/testing';

import { YellService } from './yell.service';

describe('YellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YellService]
    });
  });

  it('should be created', inject([YellService], (service: YellService) => {
    expect(service).toBeTruthy();
  }));
});
