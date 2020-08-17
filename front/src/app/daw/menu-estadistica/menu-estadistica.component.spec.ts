import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEstadisticaComponent } from './menu-estadistica.component';

describe('MenuEstadisticaComponent', () => {
  let component: MenuEstadisticaComponent;
  let fixture: ComponentFixture<MenuEstadisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEstadisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
