import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftNavigationComponent } from './left-navigation.component';
import { RouterModule, Routes } from "@angular/router";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from "@angular/common/http";
describe('LeftNavigationComponent', () => {
  let component: LeftNavigationComponent;
  let fixture: ComponentFixture<LeftNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ LeftNavigationComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
