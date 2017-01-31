/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgHeroComponent } from './kg-hero.component';

describe('KgHeroComponent', () => {
  let component: KgHeroComponent;
  let fixture: ComponentFixture<KgHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
