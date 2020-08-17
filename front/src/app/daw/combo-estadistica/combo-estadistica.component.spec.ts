import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboEstadisticaComponent } from './combo-estadistica.component';

describe('ComboEstadisticaComponent', () => {
  let component: ComboEstadisticaComponent;
  let fixture: ComponentFixture<ComboEstadisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboEstadisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
