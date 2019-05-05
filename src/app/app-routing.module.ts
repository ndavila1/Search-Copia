import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { RegistroComponent } from './components/users/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/convocatoria',
    component: ConvocatoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
