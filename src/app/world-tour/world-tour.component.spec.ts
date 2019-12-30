import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTourComponent } from './world-tour.component';

describe('WorldTourComponent', () => {
  let component: WorldTourComponent;
  let fixture: ComponentFixture<WorldTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
