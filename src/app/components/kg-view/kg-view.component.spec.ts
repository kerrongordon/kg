/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgViewComponent } from './kg-view.component';

describe('KgViewComponent', () => {
  let component: KgViewComponent;
  let fixture: ComponentFixture<KgViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
