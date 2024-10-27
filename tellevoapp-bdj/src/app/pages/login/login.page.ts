import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ConductoresService } from 'src/app/services/conductores.service';
import { AuthService } from 'src/app/services/firebase/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  emailValue?: String;
  passValue?: String;

  private usuarios = [
    {'email': 'admin@admin.cl', 'pass': 'admin1234', 'tipo': 'admin'},
    {'email': 'user@user.cl', 'pass': 'user1234', 'tipo': 'usuario'}, //pasajeros
    {'email': 'conductor@conductor.cl','pass': 'con1234','tipo': 'conductor'},
  ]

  constructor (
    private router: Router,
    private formBuilder: FormBuilder, 
    private alertController: AlertController, 
    private loadingController: LoadingController,
    private usuarioService: UsuarioService,
    private menuController: MenuController,
    private conductorService: ConductoresService,
    private authService:AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.menuController.enable(false);
  }



  async Login() {
    try{
    const loading = await this.loadingController.create({
      message: 'Cargando.....',
      duration: 2000
    });

   

    //const { email, pass } = this.loginForm.value;

    //buscamos al usuario en la base de datos
    /*const user = this.usuarios.find(aux => aux.email === email && aux.pass === pass)*/
  
      const email = this.emailValue;
      const pass = this.passValue;

      const usuarioFirebase = await this.authService.login(email as string, pass as string);

      if (usuarioFirebase.user) {
        const alert = await this.alertController.create({
          header: 'Acceso denegado',
          message: 'Usuario o contraseña incorrecta',
          buttons: ['OK']
        });
        await alert.present();
        this.emailValue = '';
        this.passValue = '';
      
        await loading.present();
        localStorage.setItem('usuarioLogin', email as string);
        
        //momentaneamente
        const tipo = 'admin' as string;
  
        setTimeout(async () => {
          await loading.dismiss();
          if(tipo === 'admin' ){
            this.router.navigate(['/admin-dashboard']);
            this.router.navigate(['home']);
          } else if (tipo === 'usuario'){
            this.router.navigate(['/usuario-dashboard']); //pasajeros
            this.router.navigate(['usuario']);
          } else {
            this.router.navigate(['/conductor-dashboard']);
            this.router.navigate(['conductores']);
          }
          
  
        }, 2000);
        


    }

  } catch(error) {
    const alert = await this.alertController.create({
      header: 'Acceso denegado',
      message: 'Usuario o contraseña incorrecta.',
      buttons: ['OK']
    });
    await alert.present();
    this.emailValue = '';
    this.passValue = '';
   }
      
  }
}
