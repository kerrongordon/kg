import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgShareComponent } from './kg-share.component';

describe('KgShareComponent', () => {
  let component: KgShareComponent;
  let fixture: ComponentFixture<KgShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
