import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.page.html',
  styleUrls: ['./detalle-conductor.page.scss'],
})
export class DetalleConductorPage implements OnInit {

  conductores = [
    { nombre: 'Roberto Manfinfla', imagen: 'assets/roberto.png'},
    { nombre: 'Alexis Sanchez', imagen: 'assets/alexis.png'},
  ];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  VerDetalleConductor(aux:any) {
    //console.log(aux);
    this.router.navigate(['detalle-conductor'])
  }

}
