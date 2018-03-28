import { TestBed, inject } from '@angular/core/testing';

import { AdmDashboardProductService } from './adm-dashboard-product.service';

describe('AdmDashboardProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmDashboardProductService]
    });
  });

  it('should be created', inject([AdmDashboardProductService], (service: AdmDashboardProductService) => {
    expect(service).toBeTruthy();
  }));
});
