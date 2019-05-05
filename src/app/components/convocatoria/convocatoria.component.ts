import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { EstructuraCrud } from 'src/app/modelos/estructura-crud';
import { Convocatoria } from './../../modelos/convocatoria.model';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit, EstructuraCrud {

  estado = 0;
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

  guardar(): void {
    if(this.estado == 0){
      this.crear();
    }else{
      this.modificar();
    }
  }

  crear(): void {
    console.log(this.servicioFirebase.create(this.convocatoriaTemp.formulario.value));
    this.convocatoriaTemp.formulario.reset();
  }

  modificar(): void {
    console.log(this.servicioFirebase.update(this.convocatoriaTemp.id, this.convocatoriaTemp.formulario.value));
    this.convocatoriaTemp = new Convocatoria();
    this.estado = 0;
  }

  eliminar(evento: any, id: string): void {
    if(evento){
      console.log(this.servicioFirebase.delete(id));
    }
  }

  buscar(id: string): void {
    this.servicioFirebase.buscar(id).subscribe(a => {
      let data = a.payload.data() as any;
      this.convocatoriaTemp.formulario.setValue(data);
      this.convocatoriaTemp.id = a.payload.id;
      this.estado = 1;
    });
  }
}