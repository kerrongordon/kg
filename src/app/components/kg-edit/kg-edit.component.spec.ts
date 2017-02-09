/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgEditComponent } from './kg-edit.component';

describe('KgEditComponent', () => {
  let component: KgEditComponent;
  let fixture: ComponentFixture<KgEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
