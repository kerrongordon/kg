/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgContactComponent } from './kg-contact.component';

describe('KgContactComponent', () => {
  let component: KgContactComponent;
  let fixture: ComponentFixture<KgContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
