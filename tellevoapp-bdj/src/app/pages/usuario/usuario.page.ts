import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  pasajeros = [
    {nombre: 'Cristiano Ronaldo',imagen:'assets/cr7.jpg'},
    {nombre: 'Batman',imagen:'assets/Batman.jpg'},
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  VerDetalleUsuario(aux:any) {
    //console.log(aux);
    this.router.navigate(['detalle-usuario'])
  }
}
