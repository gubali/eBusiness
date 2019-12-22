import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndutDecoratorComponent } from './indut-decorator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IndutDecoratorComponent', () => {
  let component: IndutDecoratorComponent;
  let fixture: ComponentFixture<IndutDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndutDecoratorComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndutDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
