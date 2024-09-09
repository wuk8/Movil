import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleConductorPageRoutingModule } from './detalle-conductor-routing.module';

import { DetalleConductorPage } from './detalle-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleConductorPageRoutingModule
  ],
  declarations: [DetalleConductorPage]
})
export class DetalleConductorPageModule {}
