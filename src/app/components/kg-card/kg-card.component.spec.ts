/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgCardComponent } from './kg-card.component';

describe('KgCardComponent', () => {
  let component: KgCardComponent;
  let fixture: ComponentFixture<KgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
