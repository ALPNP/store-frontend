import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardSettingsComponent } from './adm-dashboard-settings.component';

describe('AdmDashboardSettingsComponent', () => {
  let component: AdmDashboardSettingsComponent;
  let fixture: ComponentFixture<AdmDashboardSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
