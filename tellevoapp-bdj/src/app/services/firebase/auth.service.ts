import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireauth: AngularFireAuth) { }

  login (email: string, pass: string){
    return this.angularFireauth.signInWithEmailAndPassword(email, pass);
  }

  register(email: string, pass: string){
    return this.angularFireauth.createUserWithEmailAndPassword(email, pass);

  }

  logout(){
    return this.angularFireauth.signOut();

  }

  recoveryPassword(email: string){
    return this.angularFireauth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('Correo enviado!');

    })
    .catch((error) => {
      console.log('Error al enviar correo de recuperación');
      throw error;

    })

  }

}
