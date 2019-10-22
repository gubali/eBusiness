import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UemyHttpServicesExpComponent } from './uemy-http-services-exp.component';

describe('UemyHttpServicesExpComponent', () => {
  let component: UemyHttpServicesExpComponent;
  let fixture: ComponentFixture<UemyHttpServicesExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UemyHttpServicesExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UemyHttpServicesExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
