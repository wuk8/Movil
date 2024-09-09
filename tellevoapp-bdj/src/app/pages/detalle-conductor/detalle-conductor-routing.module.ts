import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleConductorPage } from './detalle-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleConductorPageRoutingModule {}
