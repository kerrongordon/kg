/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KgSkillComponent } from './kg-skill.component';

describe('KgSkillComponent', () => {
  let component: KgSkillComponent;
  let fixture: ComponentFixture<KgSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
