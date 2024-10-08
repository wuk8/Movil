import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleConductorPage } from './pages/detalle-conductor/detalle-conductor.page';
import { ConductoresPage } from './pages/conductores/conductores.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'conductores',
    loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: 'detalle-conductor',
    loadChildren: () => import('./pages/detalle-conductor/detalle-conductor.module').then( m => m.DetalleConductorPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'detalle-usuario',
    loadChildren: () => import('./pages/detalle-usuario/detalle-usuario.module').then( m => m.DetalleUsuarioPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'detalle-usuario/:nombre/:imagen/:descripcion',  // Define la ruta con los tres parámetros
    loadChildren: () => import('./pages/detalle-usuario/detalle-usuario.module').then(m => m.DetalleUsuarioPageModule)
  },
  { path: 'conductores', component: ConductoresPage },
  { path: 'detalle-conductor/:nombre/:imagen', component: DetalleConductorPage },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
