import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDdlComponent } from './dynamic-ddl.component';

describe('DynamicDdlComponent', () => {
  let component: DynamicDdlComponent;
  let fixture: ComponentFixture<DynamicDdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
