import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardProductListComponent } from './adm-dashboard-product-list.component';

describe('AdmDashboardProductListComponent', () => {
  let component: AdmDashboardProductListComponent;
  let fixture: ComponentFixture<AdmDashboardProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
