import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { RegistroComponent } from './components/users/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { CitacionComponent } from './components/citacion/citacion.component';
import { ChatComponent } from "./components/chat/chat.component";

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
    path: 'home/citacion',
    component: CitacionComponent
  },
  {
    path: 'home/convocatoria',
    component: ConvocatoriaComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
