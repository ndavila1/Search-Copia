import { Component, OnInit, Input } from '@angular/core';
import { PuntoMapa } from 'src/app/modelos/punto-mapa.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ConvocatoriaCrudService } from 'src/app/services/convocatoria.crud.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  latitud: number;
  longitud: number;
  user: any;
  marcasLocalizacion: PuntoMapa[] = [];
  marcasLocalizacionConvocatoria: PuntoMapa[] = [];

  constructor(private servicioUsuario: UsuariosService,
    private servicioConvocatoria: ConvocatoriaCrudService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    navigator.geolocation.getCurrentPosition(e => {
      this.latitud = e.coords.latitude;
      this.longitud = e.coords.longitude;
    });
  }

  ngOnInit() { 
    this.servicioUsuario.listar().subscribe(data => {
      data.map(elemento => {
        this.marcasLocalizacion.push({
          etiqueta: elemento.nombre,
          latitud: this.latitud,
          longitud: this.longitud,
          movible: false
        });
      });
    });
    this.servicioConvocatoria.listar().subscribe(data => {
      data.map(elemento => {
        if (elemento.UID !== this.user.uid) {
          this.marcasLocalizacionConvocatoria.push({
            etiqueta: elemento.descripcion,
            latitud: elemento.latitud,
            longitud: elemento.longitud,
            movible: false,
            descripcion: elemento.hora
          });
        }
      });
    });
  }

}
