import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildExpComponent } from './viewchild-exp.component';

describe('ViewchildExpComponent', () => {
  let component: ViewchildExpComponent;
  let fixture: ComponentFixture<ViewchildExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
