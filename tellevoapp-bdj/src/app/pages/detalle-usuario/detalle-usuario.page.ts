import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Aquí usamos ActivatedRoute

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
})
export class DetalleUsuarioPage implements OnInit {

  nombreViaje: string | null = '';
  imagenViaje: string | null = '';
  descripcionViaje: string | null = '';

  constructor(private route: ActivatedRoute) { } // Usamos 'route' para ActivatedRoute

  ngOnInit() {
    // Aquí capturamos los parámetros correctamente usando 'route'
    this.nombreViaje = this.route.snapshot.paramMap.get('nombre');
    this.imagenViaje = this.route.snapshot.paramMap.get('imagen');
    this.descripcionViaje = this.route.snapshot.paramMap.get('descripcion');
  }
}
