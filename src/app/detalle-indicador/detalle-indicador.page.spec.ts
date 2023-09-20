import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleIndicadorPage } from './detalle-indicador.page';

describe('DetalleIndicadorPage', () => {
  let component: DetalleIndicadorPage;
  let fixture: ComponentFixture<DetalleIndicadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleIndicadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
