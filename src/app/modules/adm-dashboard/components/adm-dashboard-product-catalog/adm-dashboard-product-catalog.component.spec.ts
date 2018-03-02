import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardProductCatalogComponent } from './adm-dashboard-product-catalog.component';

describe('AdmDashboardProductCatalogComponent', () => {
  let component: AdmDashboardProductCatalogComponent;
  let fixture: ComponentFixture<AdmDashboardProductCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardProductCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
