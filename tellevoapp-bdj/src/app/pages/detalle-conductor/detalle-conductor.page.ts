import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.page.html',
  styleUrls: ['./detalle-conductor.page.scss'],
})
export class DetalleConductorPage implements OnInit {

  nombreConductor: string | null = '';
  imagenConductor: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capturar los parámetros de la URL
    this.nombreConductor = this.route.snapshot.paramMap.get('nombre');
    this.imagenConductor = this.route.snapshot.paramMap.get('imagen');
  }
}
