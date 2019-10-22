import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyRoutingComponent } from './udemy-routing.component';

describe('UdemyRoutingComponent', () => {
  let component: UdemyRoutingComponent;
  let fixture: ComponentFixture<UdemyRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
