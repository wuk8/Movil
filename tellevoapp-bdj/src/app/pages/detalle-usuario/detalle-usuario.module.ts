import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleUsuarioPageRoutingModule } from './detalle-usuario-routing.module';

import { DetalleUsuarioPage } from './detalle-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleUsuarioPageRoutingModule
  ],
  declarations: [DetalleUsuarioPage]
})
export class DetalleUsuarioPageModule {}
