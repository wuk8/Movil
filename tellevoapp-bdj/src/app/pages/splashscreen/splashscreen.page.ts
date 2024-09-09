import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // dejamos un timer que redirecciona al login
    setTimeout(() => {
      this.router.navigate(['login'])
    },2000);
  }

}
