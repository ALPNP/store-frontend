import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardComponent } from './adm-dashboard.component';

describe('AdmDashboardComponent', () => {
  let component: AdmDashboardComponent;
  let fixture: ComponentFixture<AdmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});