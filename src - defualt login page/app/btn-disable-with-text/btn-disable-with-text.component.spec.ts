import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDisableWithTextComponent } from './btn-disable-with-text.component';

describe('BtnDisableWithTextComponent', () => {
  let component: BtnDisableWithTextComponent;
  let fixture: ComponentFixture<BtnDisableWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDisableWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDisableWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
