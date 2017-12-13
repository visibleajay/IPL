import { TestBed, inject } from '@angular/core/testing';

import { PlottingService } from './plotting.service';

describe('PlottingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlottingService]
    });
  });

  it('should be created', inject([PlottingService], (service: PlottingService) => {
    expect(service).toBeTruthy();
  }));
});
