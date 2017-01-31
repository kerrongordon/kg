/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgAboutComponent } from './kg-about.component';

describe('KgAboutComponent', () => {
  let component: KgAboutComponent;
  let fixture: ComponentFixture<KgAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
