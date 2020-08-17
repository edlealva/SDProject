import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComboComponent } from './buscar-combo.component';

describe('BuscarComboComponent', () => {
  let component: BuscarComboComponent;
  let fixture: ComponentFixture<BuscarComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
