import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuarios = [
    { nombre: 'Av.Manquehue Nte. 475,Las Condes,Metropolitana', imagen: 'assets/viaje4.jpg', descripcion: 'Descripción del viaje de DUOC UC a Costanera.' },
    { nombre: 'DE CASA A DUOC UC', imagen: 'assets/viaje3.jpg', descripcion: 'Descripción del viaje de casa a DUOC UC.' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  VerDetalleUsuario(aux: any) {
    // Navegar y pasar parámetros (nombre, imagen, descripcion)
    this.router.navigate(['detalle-usuario', { nombre: aux.nombre, imagen: aux.imagen, descripcion: aux.descripcion }]);
  }
}
