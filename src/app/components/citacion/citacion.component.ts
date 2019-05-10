import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { EstructuraCrud } from 'src/app/modelos/estructura-crud';
import { Convocatoria } from '../../modelos/convocatoria.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-citacion',
  templateUrl: './citacion.component.html',
  styleUrls: ['./citacion.component.css']
})
export class CitacionComponent implements OnInit {
  convocatorias: any[] = [];
  convocatoriaTemp: Convocatoria = new Convocatoria();
  usuario : string='';
  constructor(private servicioFirebase: FirebaseService,public afAuth: AuthService) {

    this.usuario = this.afAuth.getUsers();
    this.servicioFirebase.iniciarServicio('Convocatorias');

    this.servicioFirebase.iniciarServicio('Convocatorias');
  }

  ngOnInit() {
    this.listar();
  }
  listar(): void {
    this.servicioFirebase.listar().subscribe(data => {
      this.convocatorias = data.map(elemento => {
        return {
          ...elemento as Convocatoria
        }
      });
    });
  }
}
