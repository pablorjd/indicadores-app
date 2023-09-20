import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleIndicadorPage } from './detalle-indicador.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleIndicadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleIndicadorPageRoutingModule {}
