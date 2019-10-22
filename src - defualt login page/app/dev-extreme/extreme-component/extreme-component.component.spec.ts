import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremeComponentComponent } from './extreme-component.component';

describe('ExtremeComponentComponent', () => {
  let component: ExtremeComponentComponent;
  let fixture: ComponentFixture<ExtremeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
