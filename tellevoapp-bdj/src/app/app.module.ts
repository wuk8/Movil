import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DetalleConductorPage } from './pages/detalle-conductor/detalle-conductor.page';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//========  FireeeeBASEEEEEEEEEE  ===========
import {AngularFireModule} from '@angular/fire/compat'; //SABER PARA QUE FUNCIONA BIEN ESTO
import {AngularFireAuthModule} from '@angular/fire/compat/auth'; 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'; 
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
