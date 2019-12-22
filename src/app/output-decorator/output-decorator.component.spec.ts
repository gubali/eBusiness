import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorComponent } from './output-decorator.component';
import {  RouterModule, Routes} from "@angular/router";
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('OutputDecoratorComponent', () => {
  let component: OutputDecoratorComponent;
  let fixture: ComponentFixture<OutputDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputDecoratorComponent ],
    schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
