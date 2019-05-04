import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { LoginComponent } from './components/users/login/login.component';
import { RegistroComponent } from './components/users/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
=======
import { LoginComponent } from './componets/users/login/login.component';
import { RegistroComponent } from './componets/users/registro/registro.component';
import { HomeComponent } from './componets/home/home.component';
import { ConvocatoriaComponent } from './componets/convocatoria/convocatoria.component';
import { CitacionComponent } from './componets/citacion/citacion.component';
>>>>>>> 35bc8812ac612336e61c8148344fb2b9171bf551

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
<<<<<<< HEAD
    ConvocatoriaComponent
=======
    ConvocatoriaComponent,
    CitacionComponent
>>>>>>> 35bc8812ac612336e61c8148344fb2b9171bf551
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
