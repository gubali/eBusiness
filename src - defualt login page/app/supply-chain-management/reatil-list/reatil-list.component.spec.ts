import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatilListComponent } from './reatil-list.component';

describe('ReatilListComponent', () => {
  let component: ReatilListComponent;
  let fixture: ComponentFixture<ReatilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReatilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
