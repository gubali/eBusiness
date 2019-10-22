import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIndexComponent } from './default-index.component';

describe('DefaultIndexComponent', () => {
  let component: DefaultIndexComponent;
  let fixture: ComponentFixture<DefaultIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
