import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tier3ApicallComponent } from './tier3-apicall.component';

describe('Tier3ApicallComponent', () => {
  let component: Tier3ApicallComponent;
  let fixture: ComponentFixture<Tier3ApicallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tier3ApicallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tier3ApicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
