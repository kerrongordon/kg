import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgNotifyComponent } from './kg-notify.component';

describe('KgNotifyComponent', () => {
  let component: KgNotifyComponent;
  let fixture: ComponentFixture<KgNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
