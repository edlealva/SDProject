import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEstadisticaComponent } from './cliente-estadistica.component';

describe('ClienteEstadisticaComponent', () => {
  let component: ClienteEstadisticaComponent;
  let fixture: ComponentFixture<ClienteEstadisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEstadisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
