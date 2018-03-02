import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubMainPageComponent } from './pub-main-page.component';

describe('PubMainPageComponent', () => {
  let component: PubMainPageComponent;
  let fixture: ComponentFixture<PubMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
