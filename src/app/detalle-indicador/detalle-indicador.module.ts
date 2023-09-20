import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleIndicadorPageRoutingModule } from './detalle-indicador-routing.module';

import { DetalleIndicadorPage } from './detalle-indicador.page';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleIndicadorPageRoutingModule
  ],
  declarations: [DetalleIndicadorPage,ListComponent]
})
export class DetalleIndicadorPageModule {}
