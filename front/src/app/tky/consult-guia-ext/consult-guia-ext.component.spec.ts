import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultGuiaExtComponent } from './consult-guia-ext.component';

describe('ConsultGuiaExtComponent', () => {
  let component: ConsultGuiaExtComponent;
  let fixture: ComponentFixture<ConsultGuiaExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultGuiaExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultGuiaExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
