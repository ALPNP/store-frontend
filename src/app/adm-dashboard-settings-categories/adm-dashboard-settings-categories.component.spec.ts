import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardSettingsCategoriesComponent } from './adm-dashboard-settings-categories.component';

describe('AdmDashboardSettingsCategoriesComponent', () => {
  let component: AdmDashboardSettingsCategoriesComponent;
  let fixture: ComponentFixture<AdmDashboardSettingsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardSettingsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardSettingsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
