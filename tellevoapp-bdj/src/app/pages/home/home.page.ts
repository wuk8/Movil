import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioLogin? : string;

  constructor() { }

  ngOnInit() {
    this.usuarioLogin = localStorage.getItem('usuarioLogin') || '';
  }

}
