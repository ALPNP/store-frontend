import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardStatsComponent } from './adm-dashboard-stats.component';

describe('AdmDashboardStatsComponent', () => {
  let component: AdmDashboardStatsComponent;
  let fixture: ComponentFixture<AdmDashboardStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
