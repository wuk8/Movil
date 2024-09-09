import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  conductores = [
    { nombre: 'Roberto Manfinfla', imagen: 'assets/roberto.png' },
    { nombre: 'Alexis Sanchez', imagen: 'assets/alexis.png' },
  ];
  
  constructor(private router: Router) { }

  ngOnInit() {}

  VerDetalleConductor(conductor: any) {
    // Navegar a la página de detalles con el nombre e imagen como parámetros
    this.router.navigate(['detalle-conductor', conductor.nombre, conductor.imagen]);
  }
}
