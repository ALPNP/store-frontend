import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardProductAddComponent } from './adm-dashboard-product-add.component';

describe('AdmDashboardProductAddComponent', () => {
  let component: AdmDashboardProductAddComponent;
  let fixture: ComponentFixture<AdmDashboardProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
