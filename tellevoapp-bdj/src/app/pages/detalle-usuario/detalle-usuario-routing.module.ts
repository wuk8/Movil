import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleUsuarioPage } from './detalle-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleUsuarioPageRoutingModule {}
