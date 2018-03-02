import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubLoginPageComponent } from './pub-login-page.component';

describe('PubLoginPageComponent', () => {
  let component: PubLoginPageComponent;
  let fixture: ComponentFixture<PubLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
