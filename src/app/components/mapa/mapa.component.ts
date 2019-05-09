import { Component, OnInit } from '@angular/core';
import { PuntoMapa } from 'src/app/modelos/punto-mapa.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  latitud: number;
  longitud: number;
  marcaLocalizacion: PuntoMapa;

  constructor() { 
    navigator.geolocation.getCurrentPosition(e => {
      this.latitud = e.coords.latitude;
      this.longitud = e.coords.longitude;

      this.marcaLocalizacion = {
        latitud: this.latitud,
        longitud: this.longitud,
        etiqueta: "YO",
        movible: false
      }
    });
  }

  ngOnInit() { }

}
