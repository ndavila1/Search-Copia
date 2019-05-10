import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { EstructuraCrud } from 'src/app/modelos/estructura-crud';
import { Convocatoria } from '../../modelos/convocatoria.model';
@Component({
  selector: 'app-citacion',
  templateUrl: './citacion.component.html',
  styleUrls: ['./citacion.component.css']
})
export class CitacionComponent implements OnInit {
  convocatorias: any[] = [];
  convocatoriaTemp: Convocatoria = new Convocatoria();
  constructor(private servicioFirebase: FirebaseService) { 
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
